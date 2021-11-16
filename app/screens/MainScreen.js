import React, { Children } from "react";
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




<<<<<<< HEAD
=======
      <TouchableOpacity
        style={styles.mapMakerContainer}
        onPress={() => {
          setTimeout(function () {
            props.navigation.navigate("Map Display");
          }, 400);
        }}
        onPressIn={() => {
          fadeClick;
        }}
      >
        <Text style={styles.tabText}>Map Maker</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsContainer}
        onPress={() => {
          setTimeout(function() {props.navigation.navigate("Preferences");}, 400);
      }}

       onPressIn = {() => {
         fadeClick;
       }}      >
        <Text style={styles.tabText}>Preferences</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logOutContainer}
        onPress={() => {
          setTimeout(function () {
            props.navigation.navigate("Welcome Screen");
          }, 400);
        }}
        onPressIn={() => {
          fadeClick;
        }}
      >
        <Text style={styles.tabText}>Log Out</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14

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

