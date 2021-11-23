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
                <View style = {styles.textContainer}>
                    <Text style = {styles.screenText}>
                        Mapplication aspires to protect all users from exploitation by foreign attacks. {"\n\n"}
                        We complete this by {"\n"}
                        1) Protecting all valuable data from each user {"\n"}
                        2) Don't force the user to put any details that are not needed while using the app {"\n"}
                        3) Implementing security measures when a leak happens {"\n\n"}
                        Mapplication does not store or take any information that is not explicitly given to the app from the user. {"\n"}
                        Mapplication stores only information pertinent to elements specifically requested by the app. {"\n\n"}
                        Mapplication does not store the user's information on any other database or storage facility. Mapplication does not keep files or records on users
                        schedules, locations, or college.
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
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer:{
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

    export default PrivacyStatement;