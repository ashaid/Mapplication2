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

export class Preferences extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
                <View style = {styles.screenContainer}>
                    <TouchableOpacity style = {styles.profileContainer}
                     title="Profile Settings"
                     onPress={() => {
                       navigation.push("ProfileSettings");
                     }}>
                        <Text style = {styles.buttonText}>
                            Profile Settings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.accessContainer}
                     title="Accessibility"
                     onPress={() => {
                       navigation.push("Accessibility");
                     }}>
                        <Text style = {styles.buttonText}>
                            Accessibility
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.privacyContainer}
                     title="Privacy Statement"
                     onPress={() => {
                       navigation.push("PrivacyStatement");
                     }}>
                        <Text style = {styles.buttonText}>
                            Privacy Statement
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity stlye = {styles.termsContainer}
                     title="Terms and Conditions"
                     onPress={() => {
                       navigation.push("Terms");
                     }}>
                        <Text style = {styles.buttonText}>
                            Terms and Conditions
                        </Text>
                    </TouchableOpacity>
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
screenContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
},
profileContainer:{
    backgroundColor: "#ffc200",
    width: "70%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
},
accessContainer:{
    backgroundColor: "#ff7a00",
    width: "70%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
},
privacyContainer:{
    backgroundColor: "#d95702",
    width: "70%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
},
termsContainer:{
    backgroundColor: "#f2283c",
    width: "70%",
    height: "52%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
},
buttonText: {
    display: "flex",
    position: "relative",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "auto",
}

})

export default Preferences;
