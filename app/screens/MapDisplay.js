import React, { Component, useEffect } from "react";
import { MapDisplayComponent } from "../components/MapDisplayComponent";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  useState,
  Button,
  Alert,
  Image,
} from "react-native";
import { Style, Colors } from "../style/styles";
import RNPickerSelect from "react-native-picker-select";

class MapDisplay extends Component {
  //const [startingRoom, setStartingRoomText] = React.useState("");
  //const [destinationRoom, setDestinationRoomText] = React.useState("");
  constructor() {
    super();

    this.state = {
      startingRoom: "",
      destinationRoom: "",

      startingBuilding: "",
      destinationBuilding: "",
    };
  }

  setStartingRoom = (text) => {
    this.setState({ startingRoom: text });
  };

  setStartingBuilding = (text) => {
    this.setState({ startingBuilding: text });
  };

  render() {
    //NEED DROP DOWN MENU SOLUTION FOR BUILDINGS, CANNOT RELY ON USER INPUT FOR BUILDINGS TOO EASY FOR SPELLING ERRORS
    const { startingRoom, startingBuilding } = this.state;
    return (
      <View style={(styles.container, Style.centerItem)}>
        <Image
          //source={{ uri: "data:image/png;base64," + data }}
          source={require("../assets/bec-1620-1615.png")}
          style={Style.centerItem}
        />
        <View>
          <Text>Enter Starting Point:</Text>
        </View>
        <View style={styles.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            onValueChange={(value) => this.setStartingBuilding(value)}
            placeholder={{ label: "Starting Building", value: null }}
            items={[
              { label: "BEC", value: "bec" },
              { label: "PFT", value: "pft" },
              { label: "Lockett", value: "loc" },
            ]}
          />
          <TextInput
            style={styles.input}
            placeholder={"Ex:1200"}
            onChangeText={(value) => this.setStartingRoom(value)}
            maxLength={4}
          />
        </View>
        <View>
          <Text>Enter Destination:</Text>
        </View>
        <View style={styles.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            onValueChange={(value) => this.setStartingBuilding(value)}
            placeholder={{ label: "Destination Building", value: null }}
            items={[
              { label: "BEC", value: "bec" },
              { label: "PFT", value: "pft" },
              { label: "Lockett", value: "loc" },
              ]}
            />
          <TextInput
            style={styles.input}
            placeholder={"Ex:1615"}
            maxLength={4}
          />
        </View>
        <Button
          title="Submit"
          onPress={
            () =>
              console.log(
                "Simple Button Pressed"
              ) /*collects user input and sends to API call, then display the actual maps to the user*/
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    height: 20,
    width: 70,
  },
  image: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: "cover",
    // backgroundColor: "transparent",
    // border: "solid",
    // borderColor: Colors.secondary,
    // borderRadius: 20,
    //transform: "rotate(90deg)",
    flex: 1,
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
});
export default MapDisplay;
