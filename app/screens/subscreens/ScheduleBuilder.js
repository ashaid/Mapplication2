import React, { Component } from "react";
import "react-native-reanimated";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Modal,
} from "react-native";
import { Style, Colors } from "../../style/styles";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import { TouchableHighlight } from "react-native-gesture-handler";

const static_image = require("../../assets/bec-1620-1615.png");

const events_data = [
  {
    title: "CSC 4103",
    startTime: genTimeBlock("MON", 13, 30),
    endTime: genTimeBlock("MON", 14, 50),
    location: "PFT 1200",
  },
  {
    title: "CSC 4103",
    startTime: genTimeBlock("WED", 13, 30),
    endTime: genTimeBlock("WED", 14, 50),
    location: "PFT 1200",
  },
  {
    title: "CSC 4330",
    startTime: genTimeBlock("TUE", 15),
    endTime: genTimeBlock("TUE", 16, 20),
    location: "PFT 1253",
  },
  {
    title: "CSC 4330",
    startTime: genTimeBlock("THU", 15),
    endTime: genTimeBlock("THU", 16, 20),
    location: "PFT 1253",
  },
  {
    title: "CSC 2356",
    startTime: genTimeBlock("MON", 15),
    endTime: genTimeBlock("MON", 16, 20),
    location: "Coates 135",
  },
  {
    title: "CSC 2356",
    startTime: genTimeBlock("WED", 15),
    endTime: genTimeBlock("WED", 16, 20),
    location: "Coates 135",
  },
  {
    title: "ECON 2000",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 20),
    location: "Remote",
  },
  {
    title: "ECON 2000",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 20),
    location: "Remote",
  },
  {
    title: "CSC 3200",
    startTime: genTimeBlock("WED", 10, 30),
    endTime: genTimeBlock("WED", 11, 20),
    location: "PFT 1100",
  },
];

export class ScheduleBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.numOfDays = 5;
    this.pivotDate = genTimeBlock("mon");
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = () => {
    this.toggleModal(true);
    console.log("pressed");
  };

  toggleModal = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={7}
            pivotEndTime={20}
            pivotDate={this.pivotDate}
            headerStyle={styles.headerStyle}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            formatDateHeader="dddd"
            locale="en-us"
            style={styles.text}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <SafeAreaView style={[Style.centerItem]}>
              <View
                style={{
                  height: "50%",
                  width: "100%",
                }}
              >
                <TouchableHighlight
                  style={styles.modalContainer}
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}
                >
                  <Image
                    source={static_image}
                    style={{
                      flex: 1,
                      width: "100%",
                      height: "100%",
                      resizeMode: "stretch",
                    }}
                  />
                </TouchableHighlight>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#131313",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  headerStyle: {
    backgroundColor: "#277dff",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  text: {
    color: "white",
  },
  goButton: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
    width: "80%",
    height: "8%",
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 60,
    borderRadius: 100,
  },
  buttonText: {
    position: "relative",
    color: "black",
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    borderRadius: 4,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});

export default ScheduleBuilder;
