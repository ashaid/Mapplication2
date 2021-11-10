import React, { Component } from "react";
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

const MapDisplay = () => {
  const [startingRoom, setStartingRoomText] = React.useState("");
  const [destinationRoom, setDestinationRoomText] = React.useState("");

  const handleInputSubmit = useCallback((event) => {});
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
        <MapDisplayComponent
          startingRoom={startingRoom}
          destinationRoom={destinationRoom}
        />
      </View>
      <TextInput
        placeholder="starting room"
        onChangeText={(startingRoom) => setStartingRoomText(startingRoom)}
        defaultValue={startingRoom}
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="destination room"
        onChangeText={(destinationRoom) =>
          setDestinationRoomText(destinationRoom)
        }
        defaultValue={destinationRoom}
        style={styles.textInput}
      ></TextInput>

      <Button
        type="submit"
        onPress={() => console.log(`${startingRoom} and ${destinationRoom}`)}
      >
        button
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: { color: Colors.white },
});

export default MapDisplay;
