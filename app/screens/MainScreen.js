import React, { Children } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Wobble } from "../components/LogoAnimation";
import { Colors, Style } from "../style/styles";

function MainScreen(props) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chef Urgle</Text>
      </View>
      <TouchableOpacity
        style={styles.mapCalculatorContainer}
        onPress={() => props.navigation.navigate("Map Calculator")}
      >
        <Text style={(Style.centerItem, styles.headerText)}>
          Find My Classes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.scheduleBuilderContainer}
        onPress={() => props.navigation.navigate("Schedule Builder")}
      >
        <Text style={styles.tabText}>Schedule Builder</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buildingViewContainer}
        onPress={() => props.navigation.navigate("Building View")}
      >
        <Text style={styles.tabText}>Building View</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mapMakerContainer}
        onPress={() => props.navigation.navigate("Map Display")}
      >
        <Text style={styles.tabText}>Map Maker</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsContainer}
        onPress={() => props.navigation.navigate("Settings")}
      >
        <Text style={styles.tabText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logOutContainer}
        onPress={() => props.navigation.navigate("LogOut")}
      >
        <Text style={styles.tabText}>Log Out</Text>
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
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  headerContainer: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: 70,
    padding: 20,
    backgroundColor: "#2c2f33",
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
  },
  headerText: {
    color: Colors.white,
    top: 17,
    position: "relative",
    fontFamily: "Montserrat",
    fontSize: 30,
  },
  tabText: {
    position: "relative",
    color: Colors.white,
    fontFamily: "Montserrat",
    fontSize: 20,
  },
  mapCalculatorContainer: {
    backgroundColor: "#f2283c",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
  scheduleBuilderContainer: {
    backgroundColor: "#ffc280",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
  buildingViewContainer: {
    backgroundColor: "#d72e82",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
  mapMakerContainer: {
    backgroundColor: "#875afb",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
  settingsContainer: {
    backgroundColor: "#00ae6b",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
  logOutContainer: {
    backgroundColor: "#277dff",
    padding: 20,
    baseline: "1",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "42%",
    height: 160,
  },
});

export default MainScreen;
