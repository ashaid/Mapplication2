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
import TimeTableView, { genTimeBlock } from 'react-native-timetable';

function Events(title, start, end, location)
{
    this.title = title;
    this.start = start;
    this.end = end;
    this.location = location;
}
//ITS NOT WORKING WHAT THE FUCK

const events = [
    {
        title: "CSC 4103",
        startTime: genTimeBlock("MON", 1, 30),
        endTime: genTimeBlock("MON", 2, 50),
        location: "PFT 1200",
    },
    {
        title: "CSC 4103",
        startTime: genTimeBlock("WED", 1, 30),
        endTime: genTimeBlock("WED", 2, 50),
        location: "PFT 1200",
    },
    {
        title: "CSC 4330",
        startTime: genTimeBlock("TUE", 3),
        endTime: genTimeBlock("TUE", 4, 20),
        location: "PFT 2460"
    },
    {
        title: "CSC 4330",
        startTime: genTimeBlock("TUE", 3),
        endTime: genTimeBlock("TUE", 4, 20),
        location: "PFT 2460"    
    }
];

export class ScheduleBuilder extends Component
{
    render()
    {
        return(
            <SafeAreaView>
                <View>
                    <TimeTableView
                        events={events}
                        pivotTime={7}
                        pivotEndTime={19}
                        pivotDate={genTimeBlock('mon')}
                        nDays={5}
                        headerStyle={styles.headerStyle}
                        formatDateHeader="dddd"
                    />
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({

    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#131313",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,

    },
    headerStyle:{
        backgroundColor: 'white',
    }

})

export default ScheduleBuilder;