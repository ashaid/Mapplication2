import React, {Component} from "react";
import "react-native-reanimated";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export class Accessibility extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.titleText}>
                        Options
                    </Text>
                </View>
                <View style = {styles.line}></View>
                <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.languageContainer}>
                    <Text style = {styles.buttonText}>
                        Select Language
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.dictationContainer}>
                    <Text style = {styles.buttonText}>
                        Enable Dictation
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.ADAContainer}>
                    <Text style = {styles.buttonText}>
                        Enable ADA Directions
                    </Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        );
       }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#131313",
        flex: 1,
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    headerContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      top: 7,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    buttonContainer: {
        flex: .5,
    },
    languageContainer: {
      backgroundColor: "#c2f043",
      height: "60%",
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 60,
    },
    dictationContainer: {
        backgroundColor: "#61c924",
        height: "60%",
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 60,
    },
    ADAContainer: {
      backgroundColor: "#1f820d",
      height: "60%",
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 35,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    titleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 45,
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
})

export default Accessibility;