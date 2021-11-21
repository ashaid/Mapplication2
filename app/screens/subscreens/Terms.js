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
                <Text style = {styles.TermsText}>
                    testing123
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
        fontSize: 100,
        textAlign: "center",
        alignSelf: "auto",
    }
    })

    export default Terms;