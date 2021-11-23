import React, { Component } from "react";
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

export class ProfileSettings extends Component {
  constructor() {
    super();

    this.state = {
      university: "",
    };
  }

  //sets the university
  setUniversity = (text) => {
    this.setState({ university: text });
  };
  render() {
    return (
      <ImageBackground style={styles.background}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Settings</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.dropContainer}>
          <Text style={styles.TermsText}>Select University:</Text>
          {/* from https://github.com/lawnstarter/react-native-picker-select */}
          <View style={styles.dropView}>
            <RNPickerSelect
              style={pickerStyles}
              placeholder={{ label: "School", value: null }}
              items={[
                { label: "Lousiana State University", value: "lsu" },
                { label: "Baton Rouge Community College", value: "brcc" },
                {
                  label: "University of Lousiana at Lafayette",
                  value: "Lafay",
                },
                { label: "Southeastern University of Louisiana", value: "slu" },
                { label: "University of New Orleans", value: "uno" },
                { label: "Loyola University", value: "loyo" },
                { label: "Tulane University", value: "tul" },
              ]}
              onValueChange={(value) => this.setUniversity(value)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.emailContainer}>
          <Text style={styles.TermsText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationContainer}>
          <Text style={styles.TermsText}>Enable Notifications</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#131313",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  dropView: {
    backgroundColor: "#131313",
    alignItems: "center",
    justifyContent: "center",
  },
  dropContainer: {
    backgroundColor: "#f2283c",
    height: "15%",
    width: "75%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  emailContainer: {
    backgroundColor: "#d72e82",
    height: "15%",
    width: "75%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  notificationContainer: {
    backgroundColor: "#875afb",
    height: "15%",
    width: "75%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  line: {
    color: "white",
    backgroundColor: "white",
    width: "75%",
    height: 2,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 5,
  },
  TermsText: {
    display: "flex",
    position: "relative",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    alignSelf: "auto",
    marginBottom: 5,
  },
  TitleText: {
    display: "flex",
    position: "relative",
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
});

const pickerStyles = StyleSheet.create({
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
    backgroundColor: "white",
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
    backgroundColor: "white",
  },
});

export default ProfileSettings;
