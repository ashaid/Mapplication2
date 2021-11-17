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
} from "react-native";
import { Style, Colors } from "../style/styles";

class MapDisplay extends Component {
  //const [startingRoom, setStartingRoomText] = React.useState("");
  //const [destinationRoom, setDestinationRoomText] = React.useState("");
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return <MapDisplayComponent />;
  }
}

export default MapDisplay;
