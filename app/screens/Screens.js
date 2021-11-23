import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ImageComponent,
} from "react-native";

import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";
import { Style, Colors } from "../style/styles";
import { Wobble } from "../components/LogoAnimation";
import { FadeLoading } from "react-native-fade-loading";
import ImageView from "react-native-image-view";
import images from "../components/CarouselData";
import CarouselTest from "../components/CarouselTest";
//import { white } from "react-native-paper/lib/typescript/styles/colors";

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
      source={require("../assets/Background.png")}
    >
      <View style={styles.itemContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Welcome</Text>
        </View>
        <View style = {Style.centerItem}>
          <View style = {styles.imageTextContainer}>
            <Text style = {styles.imageText}>Your Saved Maps</Text>
          </View>
          <View style = {styles.imageContainer}>  
            <CarouselTest/>
          </View>    
        </View>
      </View>
    </ImageBackground>
  </ScreenContainer>
);

export const FindClasses = () => {
  return (
    <ScreenContainer>
      <ImageBackground
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
        source={require("../assets/Background.png")}
      >
        <View style={Style.centerItem}></View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <FadeLoading primaryColor="gray" secondaryColor="lightgray" />
  </ScreenContainer>
);

export const LogIn = ({ navigation }) => {
  const { logIn } = React.useContext(AuthContext);

  return (
    // <ScreenContainer style={{ flex: 1 }}>

    <ImageBackground style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <Wobble />
        <Button title="Log In" onPress={() => logIn()} />
      </SafeAreaView>
    </ImageBackground>

    // </ScreenContainer>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Schedule Builder"
            onPress={() => {
              navigation.push("Scheduler");
            }}
            style={styles.scheduleButton}
          >
            <Text style={styles.buttonText}>View Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Preferences"
            onPress={() => {
              navigation.push("Preferences");
            }}
            style={styles.preferencesButton}
          >
            <Text style={styles.buttonText}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Log Out"
            onPress={() => {
              navigation.push("Log Out");
            }}
            style={styles.logoutButton}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    justifyContent: "flex-start",
    top: 8,
    alignItems: "center",
  },
  background: {
    flex: 1,
    backgroundColor: Colors.tertiary,
    width: "100%",
    height: "100%",
  },
  scheduleButton: {
    flexDirection: "row",
    width: "70%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5a4ec7",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  preferencesButton: {
    backgroundColor: "#3827cf",
    width: "70%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  logoutButton: {
    flexDirection: "row",
    width: "70%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2412c9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    display: "flex",
    position: "relative",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "auto",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
    alignItems: "center",
    backgroundColor: "#277dff",
    borderWidth: 10,
    borderRadius: 5,
    borderColor: "#277dff",
  },
  logoText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "50%",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  imageTextContainer: {
    backgroundColor: "#ff7a00",
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
