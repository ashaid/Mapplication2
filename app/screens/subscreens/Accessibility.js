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
                <Text style = {styles.TitleText}>
                Mapplication is accessiable to all users {"\n"}
                </Text>
                 <Text style = {styles.TermsText}>
                    We complete this by {"\n"}
                    1) Having the app available for all ios and andriod users
                    2) Allowing all functions for the app to be accessiable 
                </Text>
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
        color: "#F7FAF8",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "left",
        alignSelf: "auto",
    },
    TitleText: {
        display: "flex",
        position: "relative",
        color: "white",
        fontWeight: "bold",
        fontSize: 65,
        textAlign: "center",
    }
})

export default Accessibility;