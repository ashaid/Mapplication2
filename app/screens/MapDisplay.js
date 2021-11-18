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
  TouchableOpacity,
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
    const { startingRoom, startingBuilding } = this.state;
    return (
   //   <BackgroundImage style={styles.backgroud}>
      <View style={(styles.container, Style.centerItem)}>
        <Image
          //source={{ uri: "data:image/png;base64," + data }}
          source={require("../assets/bec-1620-1615.png")}
          style={Style.centerItem}
        />
        <View style = {styles.textContainer}>
          <Text style = {styles.inputText}>Enter Starting Point:</Text>
        </View>
        <View style={styles.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            onValueChange={(value) => this.setStartingBuilding(value)}
            placeholder={{ label: "Building", value: null }}
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
        <View style={styles.textContainer}>
          <Text style={styles.inputText}>Enter Destination:</Text>
        </View>
        <View style={styles.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            onValueChange={(value) => this.setStartingBuilding(value)}
            placeholder={{ label: "Building", value: null }}
            items={[
              { label: "BEC", value: "bec" },
              { label: "PFT", value: "pft" },
              { label: "Lockett", value: "loc" },
              ]}
              style={pickerStyles}
            />
          <TextInput
            style={styles.input}
            placeholder={"Ex:1615"}
            maxLength={4}
          />
        </View>
        
        <TouchableOpacity style = {styles.buttonContainer}
          onPress={
            ()=>
              console.log(
                "Submit button pressed"
                /*collects user input and sends to API call, then display the actual maps to the user*/ 
              )
          }>
          <Text style = {styles.inputText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    //  </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#131313",
  },
  container: {
    flex: 1,
    color: "#131313",
    backgroundColor: "#131313",
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
  textContainer:{
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
    alignItems: "center",
    backgroundColor: "#277dff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
    alignItems: "center",
    backgroundColor: "#00ae6b",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  inputText:{
    position: "relative",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  }
});

const pickerStyles = StyleSheet.create({
  inputIOS:
  {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },

});

export default MapDisplay;
