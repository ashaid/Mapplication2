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
    //NEED DROP DOWN MENU SOLUTION FOR BUILDINGS, CANNOT RELY ON USER INPUT FOR BUILDINGS TOO EASY FOR SPELLING ERRORS
    return (
      <View style={styles.container}>
        <View>
          <Text>Enter Starting Point:</Text>
        </View>
        <View>
          <TextInput 
            style={styles.input}
            placeholder={'Ex: 1200'}
            maxLength= {4}
          />
        </View>
        <View>
          <Text>Enter Destination:</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Ex: 1615'}
            maxLength = {4}
          />
        </View>

        <Button title="Submit"
        onPress={() => Alert.alert('Simple Button Pressed')/*collects user input and sends to API call, then display the actual maps to the user*/}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 70,
    }
  });
export default MapDisplay;
