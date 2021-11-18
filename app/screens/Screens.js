import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";
import { Style, Colors } from "../style/styles";
import { Wobble } from "../components/LogoAnimation";

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
      source={require("../assets/Background.png")}
    >
      <View style = {styles.logoContainter}>
      <Text style={styles.logoText}>Mapplication</Text>
      </View>
    </ImageBackground>
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
    <ScreenContainer style={{ flex: 1 }}>
      <ImageBackground style={styles.background}>
        <Wobble />
        <Button title="Log In" onPress={() => logIn()} />
      </ImageBackground>
    </ScreenContainer>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ImageBackground
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
        source={require("../assets/Background.png")}
      >
        <View style={Style.buttonContainer}>
          <TouchableOpacity style = {styles.button}>

          <Text style = {styles.buttonText}>View Schedule</Text>

          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>

          <Text style = {styles.buttonText}>Preferences</Text>

          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>

          <Text style = {styles.buttonText}>Log Out</Text>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export const Preferences = ({navigation}) => {

  return(
    <ScreenContainer>
      <ImageBackground style = {styles.background}>
        <Text>Testing 1..2..</Text>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2f33",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    position: "relative",
    top: 2,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
  },
  logoText: {
    top: 15,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
