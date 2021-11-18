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

function SignUpScreen(props){
    return(

        <ImageBackground style = {styles.background}>

            <Text>Fill In</Text>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({

    background:{
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "#131313",
            baseline: "1",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
        },
    }

})

export default SignUpScreen;
