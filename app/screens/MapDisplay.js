import React, { Component } from "react";
import { MapDisplayComponent } from "../components/MapDisplayComponent";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Style, Colors } from "../style/styles";

class MapDisplay extends Component {
  render() {
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
          <MapDisplayComponent />
        </View>
        <Text>enter starting</Text>
        <Text>enter destination</Text>
      </View>
    );
  }
}

export default MapDisplay;
