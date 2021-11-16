import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, Settings, useColorScheme, TabBarIOS } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
<<<<<<< HEAD
import {Home, LogIn, ProfileScreen} from "./app/screens/Screens.js"
import { AuthContext } from "./app/components/AuthContext.js"

const MapStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const LogInStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

const LogInStackScreen = () => {
  <LogInStack.Navigator>
    <LogInStack.Screen 
    name = "LogIn" 
    component = {LogIn}
    />
  </LogInStack.Navigator>
}
=======
import { TouchableOpacity } from "react-native-gesture-handler";
>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14


<<<<<<< HEAD
=======
export default function App() {
  function fadeClick(){
    const [fadeAnim] = useState(new Animated.Value(0));
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
      }).start();
    }, []);
  }
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
>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions = {{headerShown: false}}>
    <HomeStack.Screen 
    name="Home" 
    component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen 
    name = "Profile"
    component = {ProfileScreen}
    />
  </ProfileStack.Navigator>
);

const MapStackScreen = () => (
  <MapStack.Navigator screenOptions = {{headerShown: false}}>
    <MapStack.Screen 
    name="Map Display" 
    component={MapDisplay} />
  </MapStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
  <Tabs.Screen 
  name = "Home" 
  component = {HomeStackScreen}
  />
  <Tabs.Screen 
  name = "Map Display"
  component = {MapStackScreen}
  />
  <Tabs.Screen
  name = "Profile"
  component = {ProfileStackScreen}
  />
</Tabs.Navigator>
)

const RootStackScreen = ({ userToken }) => (

<<<<<<< HEAD
  <RootStack.Navigator headerMode = "none">
    {userToken ? (
      <RootStack.Screen
      name = "Main Screen"
      component = {TabsScreen}
      />
    ) : (
    
      <RootStack.Screen 
      name = "Log In Screen"
      component = {LogInStackScreen}
      
      />
      )}
  </RootStack.Navigator>
=======
        { <Stack.Screen
         name="Preferences"
         component={Preferences}
        /* options={
           {
             headerTitle: props => <LogoTitle{...props}/>,
             headerRight: ()=>(
               <TouchableOpacity
                  onPress={()=> setTimeout(function(){props.navigation.navigate("MainScreen");}, 400)}
                  onPress={()=>{fadeClick;}}
                  title="Back"
                  color="#fff"
               />
             )
             } 
         } */
        /> }
>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14

)

export default function App() {
  const [userToken, setUserToken] = React.useState(null)
  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setUserToken("asdf");
      },

      signOut: () => {
        setUserToken(null);
      }
    };
  }, []);
  return (

<<<<<<< HEAD
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer >
        <RootStackScreen userToken = {userToken} /> 
=======
        {/* <Stack.Screen
          name="Sign In"
          component={SignInScreen}
        /> */}

        {// <Stack.Screen
      //  name="Sign Up"
      //  component={SignUpScreen}
      //  />
    }
      
      </Stack.Navigator>
>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14
    </NavigationContainer>
   </AuthContext.Provider>
  );
}
<<<<<<< HEAD
 
=======

>>>>>>> b169bc9219dd1f7461dc3fa0341bff74db1ddc14
