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
                {
                  label: "Lousiana State University",
                  value: "lsu",
                  color: "#b3b3b3",
                },
                {
                  label: "Baton Rouge Community College",
                  value: "brcc",
                  color: "#b3b3b3",
                },
                {
                  label: "University of Lousiana at Lafayette",
                  value: "Lafay",
                  color: "#b3b3b3",
                },
                {
                  label: "Southeastern University of Louisiana",
                  value: "slu",
                  color: "#b3b3b3",
                },
                {
                  label: "University of New Orleans",
                  value: "uno",
                  color: "#b3b3b3",
                },
                { label: "Loyola University", value: "loyo", color: "#b3b3b3" },
                { label: "Tulane University", value: "tul", color: "#b3b3b3" },
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
    backgroundColor: "#462638",
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
    color: "#181818",
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
    color: "#b3b3b3",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    alignSelf: "auto",
    marginBottom: 5,
  },
  TitleText: {
    display: "flex",
    position: "relative",
    color: "#b3b3b3",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
});

const pickerStyles = StyleSheet.create({
  modalViewMiddle: {
    backgroundColor: "#232323",
    borderTopColor: "#252525",
  },
  chevron: {
    borderColor: "#707070",
  },
  done: {
    color: "#fff",
  },
  modalViewBottom: {
    backgroundColor: "#252525",
  },
  placeholder: {
    color: "#777777",
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 100,
    // borderWidth: 1,
    // borderColor: "#277dff",
    color: "#b3b3b3",
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 8,
    backgroundColor: "#121212",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 90,
    paddingVertical: 21,
    borderWidth: 1,
    borderColor: "#277dff",
    borderRadius: 1,
    color: "black",
    paddingRight: 98,
    paddingLeft: 98,
    backgroundColor: "white",
  },
});

export default ProfileSettings;
