import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { AuthContext } from "../components/AuthContext";
import { ScreenContainer } from "../components/ScreenContainer";
import { Style, Colors } from "../style/styles";
import { Wobble } from "../components/LogoAnimation";
//import { white } from "react-native-paper/lib/typescript/styles/colors";

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
      source={require("../assets/Background.png")}
    >
    <View style = {styles.itemContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Mapplication</Text>
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
    <Text>Loading...</Text>
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
    backgroundColor: "#00ae6b",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  preferencesButton: {
    backgroundColor: "#ffc200",
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
    backgroundColor: "#ff7a00",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignSelf: "auto",
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
});
