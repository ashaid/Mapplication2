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


export class Terms extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
                <View>
                <Text style = {styles.TitleText}>
                This page is Terms and Conditions{"\n"}
                </Text>
                <Text style = {styles.TermsText}>
                    1) Under no circumstances should the user try to compromise the security of the app{"\n"}
                    2) Under no circumstances should the user use the app for financial gain{"\n"}
                    3) Under no circumstances should the user use the app for anything other then school preparation
                </Text>
                </View>
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
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
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

    export default Terms;