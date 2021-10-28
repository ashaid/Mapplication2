import React, { Component } from "react";
import { MapDisplayComponent } from "../components/MapDisplayComponent";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Style, Colors } from "../style/styles";

class MapDisplay extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.tertiary,
          width: "100%",
          height: "100%",
        }}
      >
        <MapDisplayComponent />
      </View>
    );
  }
}

export default MapDisplay;
