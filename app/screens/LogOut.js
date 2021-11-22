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

export class LogOut extends Component{
    render(){
    return(

        <ImageBackground style = {styles.background}>
            <View style = {styles.textContainer}>
                <Text style = {styles.itemText}>
                    Are sure you want to log out?
                </Text>
                <TouchableOpacity style = {styles.button}
                    
                >
                    <Text style = {styles.itemText}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>


    );
    }
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#131313",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
    },
    textContainer: {
        width: "75%",
        height: "30%",
        backgroundColor: "#277dff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    itemText: {
        position: "relative",
        color: "white",
        marginTop: 3,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        justifyContent: "center",
        width: "70%",
        height: "30%",
        alignItems: "center",
        backgroundColor: "#32cd32",
        borderRadius: 10,
        top: "15%",
    }
})

export default LogOut;