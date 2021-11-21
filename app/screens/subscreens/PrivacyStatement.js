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


export class PrivacyStatement extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
                <Text style = {styles.TitleText}>
                Mapplication aspires to protect all users from any exploitation from foreign attacks {"\n"}
                </Text>
                 <Text style = {styles.TermsText}>
                    We complete this by {"\n"}
                    1) Protecting all valuable data from each user {"\n"}
                    2) Don't force the user to put any details that are not needed while using the app {"\n"}
                    3) Have security measures when a leak happens 
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

    export default PrivacyStatement;