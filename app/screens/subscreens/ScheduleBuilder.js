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
} from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";

//ITS NOT WORKING WHAT THE FUCK

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
      location: "Coates 135"
    },
    {
      title: "CSC 2356",
      startTime: genTimeBlock("WED", 15),
      endTime: genTimeBlock("WED", 16, 20),
      location: "Coates 135"
    },
    {
      title: "ECON 2000",
      startTime: genTimeBlock("TUE", 9),
      endTime: genTimeBlock("TUE", 10, 20),
      location: "Remote"
    },
    {
      title: "ECON 2000",
      startTime: genTimeBlock("THU", 9),
      endTime: genTimeBlock("THU", 10, 20),
      location: "Remote"
    },
    {
      title: "CSC 3200",
      startTime: genTimeBlock("WED", 10, 30),
      endTime: genTimeBlock("WED", 11, 20),
      location: "PFT 1100"
    },
];

export class ScheduleBuilder extends Component {
  constructor(props) {
    super(props);

    this.numOfDays = 5;
    this.pivotDate = genTimeBlock("mon");
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
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
            formatDateHeader="dddd"
            locale="en-us"
          />
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
  },
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
});

export default ScheduleBuilder;
