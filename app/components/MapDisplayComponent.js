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

class MapDisplayComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      // change to loading: true for api call
      loading: false,
      error: "",
      data: null,
      startingRoom: "",
      destinationRoom: "",
      updateMap: false,
    };
  }
  apiTestHelper = async () => {
    try {
      const result = await axios.post(
        "https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=bec&start=" +
          args[0] +
          "&dest=" +
          args[1]
      );
      console.log(result);
      return result.data;
    } catch (error) {
      console.error("error: ", error);
    }
  };
  loadData = async (...args) => {
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
    console.log(this.props);
  }
  handleSubmitPress = () => {
    if (this.state.startingRoom && this.state.destinationRoom != "") {
      console.log("success");
      this.setState({ updateMap: true });
      // *** UNCOMMENT FOR API CALL
      // this.loadData(this.state.startingRoom, this.state.destinationRoom);
    } else {
      console.log("failed");
    }
  };

  handleStartingRoom = (text) => {
    this.setState({ startingRoom: text });
  };
  handleDestinationRoom = (text) => {
    this.setState({ destinationRoom: text });
  };
  handleUpdateMapToFalse = () => {
    this.setState({ updateMap: false });
  };
  render() {
    const { loading, error, data, startingRoom, destinationRoom, updateMap } =
      this.state;
    if (this.state.updateMap)
      console.log(this.state.startingRoom + " " + this.state.destinationRoom);
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
