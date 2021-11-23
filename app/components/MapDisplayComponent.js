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
  Image,
  Button,
  SafeAreaView,
  ImageBackground,
  ImageBase,
  TextInput,
  List,
  FlatList,
  Dimensions,
} from "react-native";
import { Style, Colors } from "../style/styles";
import axios from "axios";
import checkRoom from "../../backend/RoomCheck";
import FloorFinder from "../../backend/FloorFinder";
import nodeUpdater from "../../backend/NodeUpdater";
import { FadeLoading } from "react-native-fade-loading";
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
      images: [
        { src: require("../assets/images/cat1.jpg") },
        { src: require("../assets/images/cat2.jpg") },
        { src: require("../assets/images/cat3.jpg") },
      ],
    };
  }

  loadData = async (...args) => {
    // args[0] = building, args[1] = startingRoom, args[2] = destinationRoom
    // var result =
    //   "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=" +
    //   args[0] +
    //   "&start=" +
    //   args[1] +
    //   "&dest=" +
    //   args[2];
    // this.state.dataArray.push(result);
    // this.setState({ dataArray: this.state.dataArray });
    // this.setState({ loading: true });
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
      let imgString = result.data;
      console.log(imgString);
      this.state.dataArray.push(imgString);
      this.setState({
        dataArray: this.state.dataArray,
        // loading: false,
        error: false,
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
  };
  componentDidMount() {
    //this.loadData();
    console.log("mounted");
    // this.handleMapDeconstruction();

    const text = require("../assets/b64test.json");
    let data = text.data;
    this.handleChange(data);

    this.handleChange(data);
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
    const {
      startingBuilding,
      startingRoom,
      destinationBuilding,
      destinationRoom,
    } = this.props.route.params;

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
      let entranceNode = 9999;
      this.loadData(
        destinationFloor.replace(/.$/, dFloorNum.toString()),
        entranceNode,
        destinationRoom
      );
      TOTAL_MAPS = dFloorNum;
    } else if (startBuild == destBuild) {
      // same building same floor
      if (sFloorNum == dFloorNum) {
        this.loadData(
          destinationFloor.replace(/.$/, dFloorNum.toString()),
          startingRoom,
          destinationRoom
        );
        TOTAL_MAPS = 1;
      } else {
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
        TOTAL_MAPS = 2;
      }
    } else {
      // min 2 max 4
      // bec1 pft1 = we know we need 2
      nodeContainer = nodeUpdater(startingBuilding, destinationBuilding);
      if (mapTotalControl == 2) {
        this.loadData(startingFloor, startingRoom, nodeContainer[1]);
        this.loadData(destinationFloor, nodeContainer[0], destinationRoom);
        TOTAL_MAPS = mapTotalControl;
      } else if (mapTotalControl == 3) {
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

        TOTAL_MAPS = mapTotalControl;
      } else {
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
        TOTAL_MAPS = mapTotalControl;
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
    console.log("DONE LOGGIN");
    this.setState({ loading: false });
  };

  //renders a loading screen
  maps = () => {
    return this.state.dataArray.map((element, i) => {
      return (
        <View key={i} style={{ flex: 1, alignSelf: "stretch" }}>
          <Image
            source={{ uri: "data:image/png;charset=utf-8;base64," + element }}
            //source={require("../assets/bec-1620-1615.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              backgroundColor: "transparent",
              border: "solid",
              borderColor: Colors.secondary,
              borderRadius: 20,
              //transform: "rotate(90deg)",
            }}
          />
        </View>
      );
    });
  };

  handleChange = (text) => {
    this.setState((prevState) => ({
      dataArray: [...prevState.dataArray, text],
    }));
  };

  render() {
    const { loading, error, dataArray } = this.state;

    const images = this.maps();

    if (loading) {
      // return <FadeLoading primaryColor="gray" secondaryColor="lightgray" />;
      console.log(this.state.dataArray);
      return (
        <View>
          <Text>test text</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // data={this.state.images}
            data={this.state.dataArray}
            renderItem={({ item, index }) => (
              <Image
                source={{
                  uri: "data:image/png;charset=utf-8;base64," + item,
                }}
                key={index}
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 2,
                  borderColor: "#d35647",
                  resizeMode: "contain",
                  margin: 8,
                }}
              ></Image>
            )}
          />
          <Text>test text2</Text>
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
    // maps = (
    //   <View style={{ flex: 1, alignSelf: "stretch" }}>
    //     <Image
    //       //source={{ uri: "data:image/png;base64," + data }}
    //       source={require("../assets/bec-1620-1615.png")}
    //       style={{
    //         flex: 1,
    //         width: null,
    //         height: null,
    //         resizeMode: "cover",
    //         backgroundColor: "transparent",
    //         border: "solid",
    //         borderColor: Colors.secondary,
    //         borderRadius: 20,
    //         //transform: "rotate(90deg)",
    //       }}
    //     />
    //   </View>
    // );
    return (
      <View
        style={
          (Style.centerItem,
          { width: "100%", height: "100%", backgroundColor: Colors.tertiary })
        }
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            height: "80%",
            backgroundColor: Colors.tertiary,
          }}
        >
          <FlatList
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={this.images} //probably needs something with state to make it work
            legacyImplementation={false}
            renderItem={({ item, index }) => {
              <View
                style={{
                  width: SCREEN_WIDTH + 5,
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={{ item }} //use this to set image soruce
                  key={index} //important to set a key for list items, shouldn't use indexes as keys but may still work
                />
              </View>;
            }}
            style={{ width: SCREEN_WIDTH + 5, height: "100%" }}
          />
          {/* {this.maps()} */}
        </View>
      </View>
    );
  }
}
export { MapDisplayComponent };
