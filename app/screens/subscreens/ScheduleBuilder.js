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
} from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";

//ITS NOT WORKING WHAT THE FUCK

const events_data = [
  //   {
  //     title: "CSC 4103",
  //     startTime: genTimeBlock("MON", 1, 30),
  //     endTime: genTimeBlock("MON", 2, 50),
  //     location: "PFT 1200",
  //   },
  //   {
  //     title: "CSC 4103",
  //     startTime: genTimeBlock("WED", 1, 30),
  //     endTime: genTimeBlock("WED", 2, 50),
  //     location: "PFT 1200",
  //   },
  //   {
  //     title: "CSC 4330",
  //     startTime: genTimeBlock("TUE", 3),
  //     endTime: genTimeBlock("TUE", 4, 20),
  //     location: "PFT 2460",
  //   },
  //   {
  //     title: "CSC 4330",
  //     startTime: genTimeBlock("TUE", 3),
  //     endTime: genTimeBlock("TUE", 4, 20),
  //     location: "PFT 2460",
  //   },
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Math",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Mandarin",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Chen"],
  },
  {
    title: "Japanese",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Activity Center",
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

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={9}
            pivotEndTime={20}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            // headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="ko"
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
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});

export default ScheduleBuilder;
