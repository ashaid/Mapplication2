
import { NavigationContainer } from "@react-navigation/native";
import { Style, Colors } from "../style/styles";
import { Wobble } from "../components/LogoAnimation";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Wobble />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => props.navigation.navigate("Map Display")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.registerButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
  },
  buttonText: {
    position: "relative",
    top: 17,
    color: Colors.white,
    fontFamily: "Montserrat",
    fontSize: 20,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 160,
  },
  logoContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
  },
  logoText: {
    top: 10,
    color: Colors.white,
    fontFamily: "Montserrat",
    fontSize: 15,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.secondary,
    alignItems: "center",
  },
});

export default WelcomeScreen;
