import React, { Children } from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Wobble } from '../components/LogoAnimation';
import { Colors } from '../style/styles';


function MainScreen(props) {
    return (
        <ImageBackground style={styles.background}>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('Map Calculator')}
            >
                <Text style={styles.tabText}>
                    Find My Classes
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('Schedule Builder')}
            >
                <Text style={styles.tabText}>
                    Schedule Builder
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('Building View')}
            >
                <Text style={styles.tabText}>
                    Building View
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('Map Display')}
            >
                <Text style={styles.tabText}>
                    Map Maker
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('Settings')}
            >
                <Text style={styles.tabText}>
                    Settings
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.tabContainer}
            onPress={()=>props.navigation.navigate('LogOut')}
            >
                <Text style={styles.tabText}>
                    Log Out
                </Text>
            </TouchableOpacity>

        </ImageBackground>

        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#131313",

    },
    tabText:{
        position: "relative",
        top: 17,
        color: Colors.white,
        fontFamily: "Montserrat",
        fontSize: 20,
    },
    tabButton:{
        width: 70,
        height: 45,
    },
    tabContainer: {
        baseline: "1",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    column:{
        flexDirection: "column",
        flexWrap: "wrap",
    },
    mapCalculatorContainer:{
        backgroundColor: "#f2283c",
        width: 70,
        height: 45,
    },
    scheduleBuilderContainer:{
        backgroundColor: "#ffc280",
        width: 70,
        height: 45,
    },
    buildingViewContainer:{
        backgroundColor: "d72e82",
        width: 70,
        height: 45,
    },
    mapMakerContainer:{
        backgroundColor: "#875afb",
        width: 70,
        height: 45,
    },
    settingsContainer:{
        backgroundColor: "#00ae6b",
        width: 70,
        height: 45,
    },
    logOutContainer:{
        backgroundColor: "#277dff",
        width: 70,
        height: 45,
    }
})

export default MainScreen;