import React, {Component} from "react";
import "react-native-reanimated";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";


export class Accessibility extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
                <text>testing123</text>
            </ImageBackground>
        );
       }
}

const styles = StyleSheet.create({
    background: {
        color: "#131313",
        backgroundColor: "#131313",
        flex: 1,
    },
    TermsText: {
        display: "flex",
        position: "relative",
        color: "red",
        fontWeight: "bold",
        fontSize: 100,
        textAlign: "center",
        alignSelf: "auto",
    }
})

export default Accessibility;