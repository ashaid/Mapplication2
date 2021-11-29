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
  TouchableHighlight,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Style, Colors } from "../style/styles";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";

const static_image = require("../assets/newLogo.png");
const SCREEN_WIDTH = Dimensions.get("screen").width;

class MapDisplay extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,

      isVisible: false,

      fadeButton: false,

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

  renderResults = () => {
    this.setState({
      isVisible: !this.state.isVisible, //toggles the visibilty of the text
    });
  };

  handleFadeButton = (text) => {
    this.setState({ fadeButton: text });
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
        <SafeAreaView style={stylesMD.screenContainer}>
          {/* <View style={{ marginTop: 70, marginBottom: 15 }}> */}
          {/* <View style={stylesMD.headerContainer}>
              <Text style={stylesMD.header}>MAP BUILDER</Text>
            </View> */}

          <View
            style={{
              height: "80%",
              width: 390,
              alignSelf: "flex-end",
            }}
          >
            {this.state.isVisible ? (
              <View
                style={{
                  flex: 1,
                }}
              >
                <MapDisplayComponent
                  startingRoom={this.state.startingRoom}
                  startingBuilding={this.state.startingBuilding}
                  destinationRoom={this.state.destinationRoom}
                  destinationBuilding={this.state.destinationBuilding}
                  fadeButton={this.handleFadeButton}
                />
                {!this.state.fadeButton ? (
                  <TouchableOpacity
                    style={stylesMD.modalButton}
                    onPress={() => {
                      this.side_arrow.play();
                      setTimeout(() => this.renderResults(), 400);
                    }}
                  >
                    <LottieView
                      ref={(animation) => {
                        this.side_arrow = animation;
                      }}
                      source={require("../assets/up_arrow.json")}
                      loop={false}
                      speed={1.2}
                      style={{}}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                }}
              >
                <Image
                  source={static_image}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                />
                <TouchableOpacity
                  style={[stylesMD.modalButton]}
                  onPress={() => {
                    this.up_arrow.play();
                    setTimeout(() => {
                      this.toggleModal(true);
                    }, 400);
                  }}
                >
                  <LottieView
                    ref={(animation) => {
                      this.up_arrow = animation;
                    }}
                    source={require("../assets/up_arrow.json")}
                    loop={false}
                    speed={1.2}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
        <Modal
          animationType="slide"
          // animationOut="slideOutDown"
          // animationOutTiming="200"
          transparent={true}
          isVisible={this.state.modalVisible}
          swipeDirection="down"
          onSwipeThreshold={150}
          onSwipeComplete={() => this.setState({ modalVisible: false })}
          backdropOpacity={0.65}
          avoidKeyboard={false}
          style={{ margin: 0, justifyContent: "flex-end" }}
        >
          <KeyboardAwareScrollView
            contentContainerStyle={[
              Style.centerItem,
              { justifyContent: "flex-end" },
            ]}
          >
            <SafeAreaView
              style={[
                stylesMD.modalBackground,
                {
                  height: "50%",
                  width: "100%",
                },
              ]}
            >
              <TouchableHighlight
                style={[stylesMD.modalLine]}
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              >
                <View></View>
              </TouchableHighlight>

              <View style={stylesMD.textContainer}>
                <Text style={stylesMD.inputText}>Enter Starting Point:</Text>
              </View>
              <View style={stylesMD.row}>
                <View>
                  <RNPickerSelect
                    style={pickerStyles}
                    onValueChange={(value) => this.setStartingBuilding(value)}
                    placeholder={{
                      label: "Building",
                      value: "",
                    }}
                    items={[
                      { label: "N/A", value: -1, color: "#b3b3b3" },
                      { label: "BEC", value: "bec", color: "#b3b3b3" },
                      { label: "PFT", value: "pft", color: "#b3b3b3" },
                      { label: "Lockett", value: "loc", color: "#b3b3b3" },
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
                <RNPickerSelect
                  modalProps={{
                    modalViewMiddle: {
                      backgroundColor: "#232323",
                    },
                  }}
                  style={pickerStyles}
                  onValueChange={(value) => this.setDestinationBuilding(value)}
                  placeholder={{
                    label: "Building",
                    value: "",
                  }}
                  items={[
                    { label: "BEC", value: "bec", color: "#b3b3b3" },
                    { label: "PFT", value: "pft", color: "#b3b3b3" },
                    { label: "Lockett", value: "loc", color: "#b3b3b3" },
                  ]}
                />
                <TextInput
                  style={stylesMD.destination}
                  placeholder={"Ex:1615"}
                  maxLength={4}
                  onChangeText={(value) => this.setDestinationRoom(value)}
                  keyboardType="numeric"
                />
              </View>
              <TouchableOpacity
                style={stylesMD.modalButton2}
                onPress={() => {
                  this.go_button.play(52, 105);
                  this.printInputState();
                  setTimeout(() => {
                    this.toggleModal(!this.state.modalVisible);
                    this.renderResults();
                  }, 1800);
                }}
              >
                <LottieView
                  ref={(animation) => {
                    this.go_button = animation;
                  }}
                  source={require("../assets/go_button.json")}
                  loop={false}
                />
                {/* <Text style={stylesMD.buttonText}>Go!</Text> */}
              </TouchableOpacity>
            </SafeAreaView>
          </KeyboardAwareScrollView>
        </Modal>
      </ImageBackground>
    );
  }
}

const stylesMD = StyleSheet.create({
  screenContainer: {
    flex: 1,
    top: 20,
    height: Dimensions.get("screen").height,
    alignSelf: "flex-end",
    // alignItems: "flex-end",
    // flexDirection: "column",
    backgroundColor: "#131313",
    position: "relative",
  },
  modalScreenContainer: {
    flex: 1,
    top: 20,
    alignItems: "center",
    // flexDirection: "column",
    backgroundColor: "#131313",
    borderRadius: 100,
    padding: 20,
    // position: "relative",
  },
  source: {
    borderWidth: 0.5,
    borderColor: "#277dff",
    color: "#b3b3b3",
    padding: 8,
    height: 45,
    width: "50%",
    marginTop: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#121212",
  },
  destination: {
    borderColor: "#277dff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#b3b3b3",
    height: 45,
    width: "50%",
    borderWidth: 0.5,
    marginBottom: 50,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#121212",
  },
  row: {
    // flex: 1,
    flexDirection: "row",
  },
  modalButton: {
    marginTop: 30,
    // marginBottom: 50,
    backgroundColor: Colors.tertiary,
    paddingVertical: 20,
    paddingHorizontal: 40,
    // borderRadius: 10,
    // position: "relative",
    transform: [{ scale: 3 }],
  },
  modalButton2: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    width: "100%",
    height: "15%",
    // backgroundColor: "white",
    paddingVertical: 0,
    // paddingHorizontal: 60,
    // borderRadius: 100,
    position: "relative",
  },
  goButton: {
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
    width: "80%",
    height: "10%",
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
    flexDirection: "column",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: Colors.tertiary,
    width: "100%",
    height: "100%",
  },
  modalBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
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
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  inputText: {
    position: "relative",
    color: "#b3b3b3",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  line: {
    backgroundColor: "#181818",
    width: "75%",
    height: 2,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 5,
  },
  modalLine: {
    backgroundColor: "#404040",
    width: "75%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 50,
  },
});

const pickerStyles = StyleSheet.create({
  modalViewMiddle: {
    backgroundColor: "#232323",
    borderTopColor: "#252525",
  },
  chevron: {
    borderColor: "#707070",
  },
  done: {
    color: "#fff",
  },
  modalViewBottom: {
    backgroundColor: "#252525",
  },
  placeholder: {
    color: "#777777",
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderColor: "#277dff",
    color: "#b3b3b3",
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 8,
    backgroundColor: "#121212",
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
