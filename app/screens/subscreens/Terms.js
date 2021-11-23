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
                <View style = {styles.textContainer}>
                <Text style = {styles.screenText}>
                    Mapplication Terms and Conditions: {"\n\n"}
                    By using this application the user agrees to and should conform to the principles outlined as follows: {"\n\n"}
                    1) Under no circumstances should the user try to compromise the security of the app{"\n\n"}
                    2) Under no circumstances should the user use the app for financial gain{"\n\n"}
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
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#131313",
        width: "75%",
        borderWidth: .5,
        borderColor: "white",
        borderRadius: 10,
        paddingHorizontal: 30,
    },
    screenText: {
        display: "flex",
        position: "relative",
        color: "white",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "auto",
        marginVertical: 10,
    },
    })

    export default Terms;