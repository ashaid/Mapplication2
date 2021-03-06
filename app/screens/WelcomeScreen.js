import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { Style, Colors } from "../style/styles";
import { Wobble } from "../components/LogoAnimation";
import React, {useRef}  from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const ScreenContainer = ({ children }) => (

  <View style={styles.container}>{children}</View>

);
function WelcomeScreen(props) {

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Wobble />
      </View>

      <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("MainScreen");
            }}
      >

        <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity

      onPress={()=>{
        setTimeout(function() {props.navigation.navigate("SignUpScreen");}, 400);
      }}

      onPressIn = {() => {
       fadeClick;
      }}

      >
      <View style={styles.registerButton}>
        <Text style={styles.buttonText}> Create Account</Text>
      </View>
      </TouchableOpacity>
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
    top: 2,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
  loginButton: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 135,
    backgroundColor: '#28459c',
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
    top: 15,
    color: Colors.white,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    fontSize: 20,
  },

  registerButton: {
    borderRadius: 35,
    paddingVertical: 20,
    paddingHorizontal: 70,
    backgroundColor: Colors.secondary,
    alignItems: "center",
  },
});

export default WelcomeScreen;
