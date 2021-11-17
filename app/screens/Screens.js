import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";
import MainScreen from "./MainScreen";
import MapDisplay from "./MapDisplay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../assets/Background.png")}
    ></ImageBackground>
  </ScreenContainer>
);

export const LogIn = ({ navigation }) => {
  const { LogIn } = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../assets/Background.png")}
      >
        <Button title="Log In" />
      </ImageBackground>
    </ScreenContainer>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../assets/Background.png")}
      >
        <Button title="Find My Classes" />
        <Button title="My Maps" />
        <Button title="UR mom lol" />
      </ImageBackground>
    </ScreenContainer>
  );
};
