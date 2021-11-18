import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";


const styles = StyleSheet.create({

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const LogIn = ({ navigation }) => {
  const { logIn } = React.useContext(AuthContext);

  return (  
    <ScreenContainer>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../assets/Background.png")}
      >
          <Button  
          title = "Log In"
          onPress = {() => logIn()}
          />
      </ImageBackground>
    </ScreenContainer>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenContainer >
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
