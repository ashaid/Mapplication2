import React, { Children, useRef } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Wobble } from "../components/LogoAnimation";
import { Colors, Style } from "../style/styles";
import ScreenContainer  from "../components/ScreenContainer";





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
    logoContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }

});

