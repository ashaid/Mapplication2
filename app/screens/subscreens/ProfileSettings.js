import React, {Component} from "react";
import "react-native-reanimated";
import RNPickerSelect from "react-native-picker-select";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export class ProfileSettings extends Component{
    render(){
        return(
            <ImageBackground style = {styles.background}>
               <Text style = {styles.TitleText}>
                Settings {"\n"}
                </Text>
                 <Text style = {styles.TermsText}>
                     Which school?
                 </Text>
                 {/* from https://github.com/lawnstarter/react-native-picker-select */}
                 <RNPickerSelect
                style={styles}
                placeholder={{ label: "School", value: null }}
                items={[
                  { label: "Lousiana State University", value: "lsu" },
                  { label: "Baton Rouge Community College", value: "brcc" },
                  { label: "University of Lousiana at Lafayette", value: "Lafay" },
                ]}
              />
            </ImageBackground>
        );
       }
}

const styles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderWidth: 1,
        borderColor: "#131313",
        color: "black",
        paddingLeft: 65,
        paddingRight: 65,
        borderRadius: 8,
        backgroundColor: "#131313",
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 90,
        paddingVertical: 21,
        borderWidth: 1,
        borderColor: "#131313",
        borderRadius: 1,
        color: "black",
        paddingRight: 98,
        paddingLeft: 98,
        backgroundColor: "#131313",
      },
    TermsText: {
        display: "flex",
        position: "relative",
        color: "#131313",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "left",
        alignSelf: "auto",
    },
    TitleText: {
        display: "flex",
        position: "relative",
        color: "#131313",
        fontWeight: "bold",
        fontSize: 65,
        textAlign: "center",
    }
    })

    export default ProfileSettings;