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
  Image,
  Touchable,
} from "react-native";

import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";
import { Style, Colors } from "../style/styles";
import { LoadEffect } from "../components/LoadEffect";

//import { white } from "react-native-paper/lib/typescript/styles/colors";

export const Home = () => (
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
        <SafeAreaView>
          <View>
            <Text style={styles.imageText}>Your Saved Maps</Text>
          </View>
        </SafeAreaView>
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
  <ScreenContainer style={{ backgroundColor: "#131313" }}></ScreenContainer>
);

export const LogIn = () => {
  const { logIn } = React.useContext(AuthContext);
  const [displayLogo, setDisplayLogo] = useState(true);
  return (
    <ImageBackground style={styles.background}>
      <SafeAreaView
        style={{ flex: 1, height: "100%", width: "100%", marginBottom: 50 }}
      >
        {displayLogo ? (
          <View style={[Style.centerItem, { width: "100%", height: "100%" }]}>
            <Image
              source={require("../assets/newLogo.png")}
              style={{ resizeMode: "contain", width: "100%", height: "100%" }}
            />
            <View>
              <Button
                title="Log In"
                onPress={() => {
                  setDisplayLogo(false);
                  setTimeout(() => logIn(), 2000);
                }}
              />
            </View>
          </View>
        ) : (
          <LoadEffect />
        )}
      </SafeAreaView>
    </ImageBackground>

    // </ScreenContainer>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: Colors.tertiary,
        }}
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
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: "45%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  imageText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
