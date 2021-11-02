import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MapDisplay from "./app/screens/MapDisplay";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
          name="Map Display"
          component={MapDisplay}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
