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
      <Text style={{ color: Colors.white }}>Hi</Text>
    </ImageBackground>
  </ScreenContainer>
);

export const FindClasses = ({ navigation }) => {
  return (
  <ScreenContainer>
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
      source={require("../assets/Background.png")}
    >
    <View style = {Style.centerItem}>

    </View>
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
                
        <View>
          <Button title = "Find My Classes"
            onPress={() => {
            navigation.push("Find My Classes")
            }} 
            />
        </View>
        <View>
          <Button title = "My Maps" 
            onPress={() => {
            navigation.push("Find My Classes")
            }} 
          />
        </View>

      </ImageBackground>
    </ScreenContainer>
  );
};



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
});
