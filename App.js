import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MapDisplay from "./app/screens/MapDisplay";
import { FindClasses, Home, LogIn, ProfileScreen, Splash } from "./app/screens/Screens.js";
import { AuthContext } from "./app/components/AuthContext.js";

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
    <LogInStack.Screen 
    name="LogIn" 
    component={LogIn} 
    />
  </LogInStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => {
  return (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }} initialRouteName = "Profile">
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="Find My Classes" component={FindClasses} options={{headerShown: true}}/>
  </ProfileStack.Navigator>
  );
}

const MapStackScreen = () => (
  <MapStack.Navigator screenOptions={{ headerShown: false }}>
    <MapStack.Screen name="Map Display" component={MapDisplay} />
  </MapStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Map Display" component={MapStackScreen} />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none" screenOptions={{ headerShown: false }}>
    {userToken ? (
      <RootStack.Screen 
      name="Main Screen" 
      component={TabsScreen} 
      />
    ) : (
      <RootStack.Screen 
      name="Log In Screen" 
      component={LogInStackScreen} 
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  const [userToken, setUserToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const authContext = React.useMemo(() => {
    return {
      
        logIn: () => {
          setIsLoading(false)
          setUserToken("asdf");
        },
        signOut: () => {
          setUserToken(null);
        },
        classes: () => {
          setIsLoading(false)
          setUserToken("fdsa")
        }
      };
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return < Splash />
  }
  return (
    <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
