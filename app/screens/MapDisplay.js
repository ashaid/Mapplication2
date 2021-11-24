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
  Modal,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { Style, Colors } from "../style/styles";
import RNPickerSelect from "react-native-picker-select";

class MapDisplay extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,

      startingRoom: "",
      destinationRoom: "",

      startingBuilding: "",
      destinationBuilding: "",
    };
  }
  //sets the starting room
  setStartingRoom = (text) => {
    this.setState({ startingRoom: text });
  };
  //sets the destination room
  setDestinationRoom = (text) => {
    this.setState({ destinationRoom: text });
  };
  //sets the starting building
  setStartingBuilding = (text) => {
    this.setState({ startingBuilding: text });
  };
  //sets the destination building
  setDestinationBuilding = (text) => {
    this.setState({ destinationBuilding: text });
  };

  printInputState = () => {
    const {
      startingRoom,
      destinationRoom,
      startingBuilding,
      destinationBuilding,
    } = this.state;
    console.log(
      startingRoom +
        " " +
        destinationRoom +
        " " +
        startingBuilding +
        " " +
        destinationBuilding
    );
  };

  toggleModal = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const {
      startingRoom,
      startingBuilding,
      destinationRoom,
      destinationBuilding,
    } = this.state;
    // if == -1
    //
    // {enabledVar}
    // style = {}

    return (
      <ImageBackground style={stylesMD.background}>
        <View style={stylesMD.screenContainer}>
          <View style={{ marginTop: 70, marginBottom: 15 }}>
            <View style={stylesMD.headerContainer}>
              <Text style={stylesMD.header}>MAP BUILDER</Text>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <SafeAreaView style={stylesMD.screenContainer}>
              <View style={stylesMD.line}></View>
              <View style={stylesMD.textContainer}>
                <Text style={stylesMD.inputText}>Enter Starting Point:</Text>
              </View>
              <View style={stylesMD.row}>
                {/* from https://github.com/lawnstarter/react-native-picker-select */}
                <View>
                  <RNPickerSelect
                    style={pickerStyles}
                    onValueChange={(value) => this.setStartingBuilding(value)}
                    placeholder={{ label: "Building", value: "" }}
                    items={[
                      { label: "No Starting Location", value: -1 },
                      { label: "BEC", value: "bec" },
                      { label: "PFT", value: "pft" },
                      { label: "Lockett", value: "loc" },
                    ]}
                  />
                </View>
                <TextInput
                  style={stylesMD.source}
                  placeholder={"Ex:1200"}
                  onChangeText={(value) => this.setStartingRoom(value)}
                  maxLength={4}
                  keyboardType="numeric"
                />
              </View>
              <View style={stylesMD.textContainer}>
                <Text style={stylesMD.inputText}>Enter Destination:</Text>
              </View>
              <View style={stylesMD.row}>
                {/* from https://github.com/lawnstarter/react-native-picker-select */}
                <View>
                  <RNPickerSelect
                    style={pickerStyles}
                    onValueChange={(value) =>
                      this.setDestinationBuilding(value)
                    }
                    placeholder={{ label: "Building", value: "" }}
                    items={[
                      { label: "BEC", value: "bec" },
                      { label: "PFT", value: "pft" },
                      { label: "Lockett", value: "loc" },
                    ]}
                  />
                </View>
                <TextInput
                  style={stylesMD.destination}
                  placeholder={"Ex:1615"}
                  maxLength={4}
                  onChangeText={(value) => this.setDestinationRoom(value)}
                  keyboardType="numeric"
                />
              </View>
              <TouchableOpacity
                style={stylesMD.goButton}
                onPress={() => {
                  this.printInputState();
                  this.props.navigation.push("Rendered Map", {
                    startingRoom,
                    destinationRoom,
                    startingBuilding,
                    destinationBuilding,
                  });
                }}
              >
                <Text style={stylesMD.buttonText}>Go!</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={stylesMD.goButton}
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              >
                <Text style={stylesMD.buttonText}>close modal</Text>
              </TouchableHighlight>
            </SafeAreaView>
          </Modal>
          <View style={stylesMD.row}>
            <TouchableOpacity
              style={stylesMD.goButton}
              onPress={() => {
                this.toggleModal(true);
              }}
            >
              <Text style={stylesMD.buttonText}>show modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const stylesMD = StyleSheet.create({
  screenContainer: {
    flex: 1,
    top: 20,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#131313",
    position: "relative",
  },
  source: {
    borderWidth: 0.5,
    borderColor: "#277dff",
    padding: 8,
    height: 45,
    width: "50%",
    marginTop: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "white",
  },
  destination: {
    borderColor: "#277dff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 45,
    width: "50%",
    borderWidth: 0.5,
    marginBottom: 50,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "white",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  goButton: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
    width: "80%",
    height: "8%",
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 60,
    borderRadius: 100,
  },
  buttonText: {
    position: "relative",
    color: "black",
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 20,
  },
  textTop: {
    fontSize: 24,
    marginTop: 90,
    color: "white",
    marginBottom: 5,
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 24,
    color: "white",
    marginBottom: 5,
    fontWeight: "bold",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#277dff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 45,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#99aab5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  inputText: {
    position: "relative",
    color: Colors.white,
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    color: "white",
    backgroundColor: "white",
    width: "75%",
    height: 2,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 5,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderColor: "#277dff",
    color: "black",
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 8,
    backgroundColor: "white",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 90,
    paddingVertical: 21,
    borderWidth: 1,
    borderColor: "#277dff",
    borderRadius: 1,
    color: "black",
    paddingRight: 98,
    paddingLeft: 98,
    backgroundColor: "white",
  },
});

export default MapDisplay;
