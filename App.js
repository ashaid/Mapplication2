import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MapDisplay from "./app/screens/MapDisplay";
import { MapDisplayComponent } from "./app/components/MapDisplayComponent";
import { ScheduleBuilder } from "./app/screens/subscreens/ScheduleBuilder";
import { Preferences } from "./app/screens/subscreens/Preferences";
import { LogOut } from "./app/screens/LogOut";
import { Terms } from "./app/screens/subscreens/Terms";
import { PrivacyStatement } from "./app/screens/subscreens/PrivacyStatement";
import { ProfileSettings } from "./app/screens/subscreens/ProfileSettings";
import { Accessibility } from "./app/screens/subscreens/Accessibility";
import {
  FindClasses,
  Home,
  LogIn,
  ProfileScreen,
  Splash,
  SafeAreaView,
} from "./app/screens/Screens.js";
import { AuthContext } from "./app/components/AuthContext.js";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MapViews } from "./app/screens/subscreens/MapViews";
import { Style, Colors } from "./app/style/styles";
import { tupleExpression } from "@babel/types";

const MapStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const LogInStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const TabProfileStack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const ClassStack = createNativeStackNavigator();

const LogInStackScreen = () => (
  <LogInStack.Navigator screenOptions={{ headerShown: false }}>
    <LogInStack.Screen name="LogIn" component={LogIn} />
  </LogInStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home Screen" component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.tertiary },
        headerTitleStyle: {
          color: Colors.white,
        },
        headerTintColor: Colors.white,
      }}
      initialRouteName="Profile"
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Find My Classes"
        component={FindClasses}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Scheduler"
        component={ScheduleBuilder}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Preferences"
        component={Preferences}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Profile Settings"
        component={ProfileSettings}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Accessibility"
        component={Accessibility}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="PrivacyStatement"
        component={PrivacyStatement}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Terms and Conditions"
        component={Terms}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="Log Out"
        component={LogOut}
        options={{ headerShown: true }}
      />
    </ProfileStack.Navigator>
  );
};

const MapStackScreen = () => (
  <MapStack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: Colors.tertiary },
      headerTitleStyle: {
        color: Colors.white,
      },
      headerTintColor: Colors.white,
    }}
  >
    <MapStack.Screen name="Map Display Screen" component={MapDisplay} />
    <ProfileStack.Screen
      name="Rendered Map"
      component={MapDisplayComponent}
      options={{ headerShown: true }}
    />
  </MapStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Map Display"
      component={MapStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="map-search-outline"
            // for example could use Colors.teriary
            color={color}
            size={20}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="user"
            // for example could use Colors.teriary
            color={color}
            size={20}
          />
        ),
        headerStyle: { backgroundColor: Colors.primary },
      }}
    />
  </Tabs.Navigator>
);

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: "white", flex: 1 },
    }}
  >
    {userToken ? (
      <RootStack.Screen name="Main Screen" component={TabsScreen} />
    ) : (
      <RootStack.Screen name="Log In Screen" component={LogInStackScreen} />
    )}
  </RootStack.Navigator>
);

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      },
      classes: () => {
        setIsLoading(false);
        setUserToken("fdsa");
      },
    };
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
