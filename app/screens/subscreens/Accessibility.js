import React, {Component} from "react";
import "react-native-reanimated";
import {
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
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    buttonContainer: {
        flex: .55,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    headerContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    languageContainer: {
      backgroundColor: "#c2f043",
      height: "30%",
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 40,
      paddingHorizontal: 70,
    },
    dictationContainer: {
        backgroundColor: "#61c924",
        height: "30%",
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 70,
    },
    ADAContainer: {
      backgroundColor: "#1f820d",
      height: "30%",
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 40,
      paddingHorizontal: 42,
    },
    buttonText: {
        display: "flex",
        position: "relative",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
        alignSelf: "auto",
        marginBottom: 5,
    },
    titleText: {
        display: "flex",
        position: "relative",
        color: "white",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
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