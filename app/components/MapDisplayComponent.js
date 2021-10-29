import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  ImageBackground,
  ImageBase,
} from "react-native";
import { Style, Colors } from "../style/styles";
import axios from "axios";

class MapDisplayComponent extends Component {
  constructor() {
    super();

    this.state = {
      // change to loading: true for api call
      loading: false,
      error: "",
      data: null,
    };
  }
  loadData = async () => {
    this.setState({ loading: true });
    try {
      const result = await axios.post(
        //"https://93tdgadq0a.execute-api.us-east-1.amazonaws.com/staging?building=bec&start=1615&dest=1125"
        "api call"
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
  }
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
    return (
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
  }
}

export { MapDisplayComponent };
