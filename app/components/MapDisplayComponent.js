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
} from "react-native";
import { Style, Colors } from "../style/styles";
import axios from "axios";
import checkRoom from "../../backend/RoomCheck";
import FloorFinder from "../../backend/FloorFinder";
import { FadeLoading } from 'react-native-fade-loading';

class MapDisplayComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      // change to loading: true for api call
      loading: false,
      error: "",
      dataArray: [],
      updateMap: false,
    };
  }

  loadData = async (...args) => {
    // args[0] = building, args[1] = startingRoom, args[2] = destinationRoom
    var result =
      "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=" +
      args[0] +
      "&start=" +
      args[1] +
      "&dest=" +
      args[2];
    this.state.dataArray.push(result);
    this.setState({ dataArray: this.state.dataArray });
    // this.setState({ loading: true });
    // try {
    //   const result = await axios.post(
    //     "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=" +
    //       args[0] +
    //       "&start=" +
    //       args[1] +
    //       "&dest=" +
    //       args[2]
    //   );
    //   console.log(result);
    //   this.setState({
    //     data: result.data,
    //     loading: false,
    //     error: false,
    //   });
    // } catch (error) {
    //   console.error("error: ", error);

    //   this.setState({
    //     // objects cannot be used as a react child
    //     // -> <p>{error}</p> would throw otherwise
    //     error: `${error}`,
    //     loading: false,
    //   });
  };
  componentDidMount() {
    //this.loadData();
    console.log("mounted");
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
    const {
      startingBuilding,
      startingRoom,
      destinationBuilding,
      destinationRoom,
    } = this.props.route.params;

    let TOTAL_MAPS = 0;

    //established the floor the room is located on and creates an identifier string
    let startingFloor = FloorFinder(startingBuilding, startingRoom);
    let destinationFloor = FloorFinder(destinationBuilding, destinationRoom);

    //take the id strings and isolated the numbers in an array
    let sFloorHold = startingFloor.match(/(\d+)/);
    let dFloorHold = destinationFloor.match(/(\d+)/);

    //holds the building values without floor identifier
    let startBuild = startingFloor.replace(/[0-9]/g, "");
    let destBuild = destinationFloor.replace(/[0-9]/g, "");

    //changes the strings in the array into integers
    let sFloorNum = parseInt(sFloorHold[0]);
    let dFloorNum = parseInt(dFloorHold[0]);

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

    let exitNode = 9999;
    let entranceNode = 9999;
    //evaluates the source and destination floors in order to get a number of map images that need to be generated
    if (startingBuilding == -1) {
      // no starting
      TOTAL_MAPS = dFloorNum;
    } else if (startBuild == destBuild) {
      // same building same floor
      if (sFloorNum == dFloorNum) {
        this.loadData(destinationFloor, startingRoom, destinationRoom);
        TOTAL_MAPS = 1;
      } else {
        // same building different floor
        this.loadData(destinationFloor, startingRoom, destinationRoom);
        TOTAL_MAPS = 2;
      }
    } else {
      // min 2 max 4
      // bec1 pft1 = we know we need 2
      if (mapTotalControl == 2) {
        this.loadData(startingFloor, startingRoom, exitNode);
        this.loadData(destinationFloor, entranceNode, destinationRoom);
        TOTAL_MAPS = mapTotalControl;
      } else if (mapTotalControl == 3) {
        this.loadData(startingFloor, startingRoom, exitNode);
        if (sFloorNum < dFloorNum) {
          // bec1 pft2 = we know we need 3 maps
          // if sfloor < dfloor
          this.loadData(
            destinationFloor.replace(/.$/, "1"),
            entranceNode,
            exitNode
          );
          this.loadData(destinationFloor, entranceNode, destinationRoom);
        } else {
          // pft2 bec1
          // if sfloor > dfloor
          startingFloor = startingFloor.replace(/.$/, "1");
          this.loadData(startingFloor, entranceNode, exitNode);
          this.loadData(destinationFloor, entranceNode, destinationRoom);
        }

        TOTAL_MAPS = mapTotalControl;
      } else {
        // bec2 pf2 = we know we need 4
        // if mapTotalControl = 4
        // pft, bec, loc
        this.loadData(startingFloor, startingRoom, exitNode); // pft2
        startingFloor = startingFloor.replace(/.$/, "1");
        this.loadData(startingFloor, entranceNode, exitNode); // pft1 9997 9999

        this.loadData(
          destinationFloor.replace(/.$/, "1"),
          entranceNode,
          exitNode
        );
        this.loadData(destinationFloor, entranceNode, destinationRoom);
        TOTAL_MAPS = mapTotalControl;
      }
    }
    console.log(this.state.dataArray);
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
  };

  //renders a loading screen
  render() {
    const { loading, error, data } = this.state;
    if (loading) {
      return <FadeLoading primaryColor="gray" secondaryColor="lightgray" duration={5000} />;
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
    let map;
    map = (
      <View style={{ flex: 1, alignSelf: "stretch" }}>
        <Image
          //source={{ uri: "data:image/png;base64," + data }}
          source={require("../assets/bec-1620-1615.png")}
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
          {map}
        </View>
      </View>
    );
  }
}

export { MapDisplayComponent };
