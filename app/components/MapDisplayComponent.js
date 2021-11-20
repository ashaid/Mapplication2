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

class MapDisplayComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      // change to loading: true for api call
      loading: false,
      error: "",
      data: null,
      // startingRoom: "",
      // destinationRoom: "",
      updateMap: false,
    };
  }

  loadData = async (...args) => {
    // args[0] = building, args[1] = startingRoom, args[2] = destinationRoom
    console.log(args);
    this.setState({ loading: true });
    try {
      const result = await axios.post(
        "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=bec&start=" +
          args[0] +
          "&dest=" +
          args[1]
      );
      console.log(result);
      this.setState({
        data: result.data,
        loading: false,
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

    const startingFloor = FloorFinder(startingBuilding, startingRoom);
    const destinationFloor = FloorFinder(destinationBuilding, destinationRoom);
    // sameFloor/Building ? =>
    console.log(
      parseInt(startingFloor.length) - parseInt(destinationFloor.length)
    );
    console.log(startingFloor && destinationFloor);
    startingBuilding == -1
      ? (TOTAL_MAPS = 2)
      : startingFloor == destinationFloor
      ? (TOTAL_MAPS = 1)
      : parseInt(startingFloor.length) - parseInt(destinationFloor.length) != 0
      ? (TOTAL_MAPS = 3)
      : (TOTAL_MAPS = 4);

    console.log("TOTAL MAPS: " + TOTAL_MAPS);

    console.log(
      "startingFloor: " +
        startingFloor +
        " " +
        "destinationFloor: " +
        destinationFloor
    );
  };

  render() {
    const { loading, error, data } = this.state;
    if (loading) {
      return <Text>Loading ...</Text>;
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
