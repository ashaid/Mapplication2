import React, { Component } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
  ImageBase,
  TextInput,
  List,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { Style, Colors } from "../style/styles";
import axios from "axios";
import checkRoom from "../../backend/RoomCheck";
import FloorFinder from "../../backend/FloorFinder";
import nodeUpdater from "../../backend/NodeUpdater";
import { FadeLoading } from "react-native-fade-loading";
import LottieView from "lottie-react-native";
// import Image from "react-native-scalable-image";
const SCREEN_WIDTH = Dimensions.get("window").width;

class MapDisplayComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      // change to loading: true for api call
      loading: true,
      error: "",
      dataArray: [],
      updateMap: false,
      counter: 0,
      totalMapsState: 0,
      renderConfetti: true,
    };
  }

  loadData = async (...args) => {
    try {
      var result = await axios.post(
        "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=" +
          args[0] +
          "&start=" +
          args[1] +
          "&dest=" +
          args[2]
      );
      console.log(result);
      this.handleDataArrayChange(result.data);
      this.setState((prevState) => {
        return { error: false, counter: prevState.counter + 1 };
      });
    } catch (error) {
      console.error("error: ", error);

      this.setState({
        // objects cannot be used as a react child
        // -> <p>{error}</p> would throw otherwise
        error: `${error}`,
        loading: false,
      });
    }

    if (this.state.totalMapsState == this.state.counter) {
      this.setState({ loading: false });
      this.props.fadeButton(false);
      setTimeout(() => {
        this.setState({ renderConfetti: false });
      }, 2500);
    } else console.log("not finished loading maps");
  };
  componentDidMount() {
    this.props.fadeButton(true);
    this.map_loader.play();
    this.handleMapDeconstruction();
  }

  handleMapDeconstruction = () => {
    /*
     * 1 MAP = STARTING POINT -> ENDING POINT ->  SAME FLOOR/BUILDING
     * 2 MAP = NO STARTING POINT -> 2ND FLOOR END POINT -> ANY BUILDING
     * 3 MAP = STARTING POINT 1ST FLOOR -> 2ND FLOOR END POINT -> DIFFERENT BUILDINGS
     * 4 MAP = STARTING POINT 2ND FLOOR -> 2ND FLOOR END POINT -> DIFFERENT BUILDINGS (NOT IMPLEMENTING)
     *
     * need to think about basement logic? idk
     */
    // old way
    // const {
    //   startingBuilding,
    //   startingRoom,
    //   destinationBuilding,
    //   destinationRoom,
    // } = this.props.route.params;

    const {
      startingBuilding,
      startingRoom,
      destinationBuilding,
      destinationRoom,
    } = this.props;

    let TOTAL_MAPS = 0;

    const staircaseNode = 7777;

    let nodeContainer;

    //established the floor the room is located on and creates an identifier string
    let startingFloor = FloorFinder(startingBuilding, startingRoom);
    let destinationFloor = FloorFinder(destinationBuilding, destinationRoom);

    //holds the building values without floor identifier
    let startBuild = startingFloor.replace(/[0-9]/g, "");
    let destBuild = destinationFloor.replace(/[0-9]/g, "");

    //changes the strings in the array into integers
    let sFloorNum = parseInt(startingFloor.match(/(\d+)/));
    let dFloorNum = parseInt(destinationFloor.match(/(\d+)/));

    //if a floor is in the basement aka 0, it ups the floornumber so that it is included in the map count
    if (sFloorNum == 0) {
      sFloorNum++;
    }
    if (dFloorNum == 0) {
      dFloorNum++;
    }

    //keeps the map total to 4 regardless of floor number
    let mapTotalControl = sFloorNum + dFloorNum;
    if (mapTotalControl > 4) {
      mapTotalControl = 4;
    }

    console.log(startingFloor && destinationFloor);

    //evaluates the source and destination floors in order to get a number of map images that need to be generated
    if (startingBuilding == -1) {
      // no starting
      TOTAL_MAPS = dFloorNum;
      this.setState({ totalMapsState: TOTAL_MAPS });
      let entranceNode = 9999;
      this.loadData(
        destinationFloor.replace(/.$/, dFloorNum.toString()),
        entranceNode,
        destinationRoom
      );
    } else if (startBuild == destBuild) {
      // same building same floor
      TOTAL_MAPS = 2;
      this.setState({ totalMapsState: TOTAL_MAPS });
      if (sFloorNum == dFloorNum) {
        TOTAL_MAPS = 1;
        this.setState({ totalMapsState: TOTAL_MAPS });
        this.loadData(
          destinationFloor.replace(/.$/, dFloorNum.toString()),
          startingRoom,
          destinationRoom
        );
      } else {
        // this.setState({ totalMapsState: TOTAL_MAPS });
        this.loadData(
          startingFloor.replace(/.$/, sFloorNum.toString()),
          startingRoom,
          staircaseNode
        );
        // same building different floor
        this.loadData(
          destinationFloor.replace(/.$/, dFloorNum.toString()),
          staircaseNode,
          destinationRoom
        );
      }
    } else {
      // min 2 max 4
      // bec1 pft1 = we know we need 2
      nodeContainer = nodeUpdater(startingBuilding, destinationBuilding);
      if (mapTotalControl == 2) {
        TOTAL_MAPS = mapTotalControl;
        this.setState({ totalMapsState: TOTAL_MAPS });
        this.loadData(startingFloor, startingRoom, nodeContainer[1]);
        this.loadData(destinationFloor, nodeContainer[0], destinationRoom);
      } else if (mapTotalControl == 3) {
        TOTAL_MAPS = mapTotalControl;
        this.setState({ totalMapsState: TOTAL_MAPS });
        if (sFloorNum < dFloorNum) {
          this.loadData(startingFloor, startingRoom, nodeContainer[1]);
          // bec1 pft2 = we know we need 3 maps
          // if sfloor < dfloor
          this.loadData(
            destinationFloor.replace(/.$/, "1"),
            nodeContainer[0],
            staircaseNode
          );
          this.loadData(destinationFloor, staircaseNode, destinationRoom);
        } else {
          this.loadData(startingFloor, startingRoom, staircaseNode);
          // pft2 bec1
          // if sfloor > dfloor
          this.loadData(
            startingFloor.replace(/.$/, "1"),
            staircaseNode,
            nodeContainer[1]
          );
          this.loadData(destinationFloor, nodeContainer[0], destinationRoom);
        }
      } else {
        TOTAL_MAPS = mapTotalControl;
        this.setState({ totalMapsState: TOTAL_MAPS });
        // bec2 pf2 = we know we need 4
        // if mapTotalControl = 4
        // pft, bec, loc
        this.loadData(startingFloor, startingRoom, staircaseNode); // pft2
        startingFloor = startingFloor.replace(/.$/, "1");
        //node update for next two maps
        //nodeContainer = nodeUpdater(startingBuilding, destinationBuilding);
        this.loadData(startingFloor, staircaseNode, nodeContainer[0]); // pft1 9997 9999

        this.loadData(
          destinationFloor.replace(/.$/, "1"),
          nodeContainer[1],
          staircaseNode
        );
        this.loadData(destinationFloor, staircaseNode, destinationRoom);
      }
    }
    //prints total number of maps
    console.log("TOTAL MAPS: " + TOTAL_MAPS);

    //prints id strings for starting and destination floor
    console.log(
      "startingFloor: " +
        startingFloor +
        " " +
        "destinationFloor: " +
        destinationFloor
    );
    console.log("LOGGING");
    console.log(this.state.dataArray);
  };

  handleDataArrayChange = (text) => {
    this.setState((prevState) => ({
      dataArray: [...prevState.dataArray, text],
    }));
  };

  render() {
    const { loading, error, dataArray } = this.state;

    // console.log(dataArray);
    if (loading) {
      return (
        <View style={{ width: "100%", height: "100%" }}>
          <LottieView
            ref={(animation) => {
              this.map_loader = animation;
            }}
            source={require("../assets/map_loader.json")}
            loop={true}
            style={{ transform: [{ scale: 1.2 }] }}
          />
        </View>
      );
    }
    if (error) {
      return (
        <Text>
          There was an error loading the map.{" "}
          <Button
            style={Style.centerItem}
            onClick={this.loadData}
            title="try again"
          ></Button>
        </Text>
      );
    }
    return (
      <View style={Style.centerItem}>
        <FlatList
          maximumZoomScale={2}
          minimumZoomScale={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={dataArray}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={this.renderSeperator}
          contentContainerStyle={{}}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: "data:image/png;charset=utf-8;base64," + item,
              }}
              // key={index}
              style={[
                Style.centerItem,
                {
                  borderRadius: 5,
                  aspectRatio: 1.3,
                  resizeMode: "contain",
                },
              ]}
            ></Image>
          )}
        />
        {this.state.renderConfetti ? (
          <LottieView
            ref={(animation) => {
              this.confetti_boom = animation;
            }}
            source={require("../assets/confetti.json")}
            autoPlay
            loop={false}
            speed={0.7}
            style={{
              transform: [{ scale: 1.2 }],
              position: "absolute",
              bottom: "10%",
            }}
          />
        ) : (
          console.log("confetti gone")
        )}
      </View>
    );
  }
}
export { MapDisplayComponent };
