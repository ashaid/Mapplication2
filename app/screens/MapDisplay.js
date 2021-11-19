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
    <ImageBackground style = {stylesMD.background}>
      <View style={(stylesMD.container, Style.centerItem)}>

        <View>
          <Text style={stylesMD.textTop}>Enter Starting Point:</Text>
        </View>
        <View style={stylesMD.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            style={pickerStyles}
            onValueChange={(value) => this.setStartingBuilding(value)}
            placeholder={{ label: "Building", value: null }}
            items={[
              { label: "BEC", value: "bec" },
              { label: "PFT", value: "pft" },
              { label: "Lockett", value: "loc" },
            ]}

          />
          <TextInput
            style={stylesMD.source}
            placeholder={"Ex:1200"}
            onChangeText={(value) => this.setStartingRoom(value)}
            maxLength={4}
          />
        </View>
        <View>
          <Text style={stylesMD.textBottom}>Enter Destination:</Text>
        </View>
        <View style={stylesMD.row}>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <RNPickerSelect
            onValueChange={(value) => this.setStartingBuilding(value)}
              { label: "Lockett", value: "loc" },
              ]}
            />
          <TextInput
            style={stylesMD.destination}
            placeholder={"Ex:1615"}
            maxLength={4}
          />
        </View>
        <View style={stylesMD.buttonContainer}>
          <Button
            title="Submit"
            onPress={
              () =>
              {
                ButtonProtocol();
              }
                /*collects user input and sends to API call, then display the actual maps to the user*/
            }
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
}
function ButtonProtocol(startingRoom, destinationRoom, startBuilding, destinationBuilding)
{
  console.log("Simple Button Pressed");
}

const stylesMD = StyleSheet.create({
  container: {
    flex: 1,
    color: "#131313",
    backgroundColor: "#131313",
  },
  source: {
    borderWidth: 0.5,
    borderColor: "blue",
    padding: 8,
    height: 45,
    width: 80,
    marginTop: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical:8,
    borderRadius: 8,
    backgroundColor:'white',
  },
  destination: {
    borderColor: "blue",
    paddingHorizontal: 10,
    paddingVertical:8,
    height: 45,
    width: 80,
    borderWidth: 0.5,
    marginBottom: 50,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'white',
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
  buttonContainer:
  {
    marginBottom: 40,
  },
  textTop:
  {
    fontSize: 24,
    marginTop: 200,
    color: 'white',
    marginBottom: 5
  },
  textBottom:
  {
    fontSize: 24,
    color: 'white',
    marginBottom: 5
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
    width: "100%",
    height: "100%",
  },
});
/*
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
}*/
const pickerStyles = StyleSheet.create({
  inputIOS:
  {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
    color: 'black',
    paddingRight: 30,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
  },

});

export default MapDisplay;
