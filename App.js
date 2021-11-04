import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, Settings } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MapDisplay from "./app/screens/MapDisplay";
import MainScreen from "./app/screens/MainScreen";
import BuildingViewer from "./app/screens/subscreens/BuildingViewer";
import MapCalculator from "./app/screens/subscreens/MapCalculator";
import MapMaker from "./app/screens/subscreens/MapMaker";
import LogOut from "./app/screens/LogOut";
import ScheduleBuilder from "./app/screens/subscreens/ScheduleBuilder";
import SignInScreen from "./app/screens/SignInScreen";
import Preferences from "./app/screens/subscreens/Preferences";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
          //options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          //options={}
        />

        <Stack.Screen
          name="Map Display"
          component={MapDisplay}
          options={{ headerShown: true }}
        />

        {/* <Stack.Screen
          name="Log Out"
          component={LogOut}
          //options
        /> */}

        {/* <Stack.Screen
          name="Building View"
          component={BuildingViewer}
          //options
        /> */}

        {/* <Stack.Screen
          name="Map Calculator"
          component={MapCalculator}
          //options
        /> */}

        {/* <Stack.Screen
         name="Map Maker"
         component={MapMaker}
         //options
        /> */}

        {/* <Stack.Screen
         name="Settings"
         component={Settings}
         //options
        /> */}

        {/* <Stack.Screen
         name="Schedule Builder"
         component={ScheduleBuilder}
         //options
        /> */}

        {/* <Stack.Screen
          name="Sign In"
          component={SignInScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
