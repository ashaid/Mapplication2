import React, {Component} from "react";
import "react-native-reanimated";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function VirtualTourView(props){
    return(

        <ImageBackground style = {styles.background}></ImageBackground>


    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#131313",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
    },
})

export default VirtualTourView;