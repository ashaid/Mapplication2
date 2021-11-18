/*
import React, {Component} from "react";
import "react-native-reanimated";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Preferences(props){

    function fadeClick(){
        const [fadeAnim] = useState(new Animated.Value(0));
      
        React.useEffect(() => {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
          }).start();
        }, []);
    }
    return(

        <ImageBackground style = {styles.background}>
            <View style = {styles.header}>
                <TouchableOpacity style = {styles.backButton}
                onPress={()=> {setTimeout(function(){props.navigation.navigate("MainScreen");}, 400)}}
                onPress={()=>{fadeClick;}}>
                    <Text style = {styles.headerText}>Back</Text>

                </TouchableOpacity>
                <Text stlye={styles.headerText}>Chef Urgle</Text>
            </View>
            <TouchableOpacity>

                <Text>Accessibility</Text>

            </TouchableOpacity>
            <TouchableOpacity>

                <Text>Account</Text>

            </TouchableOpacity>


        </ImageBackground>


    );
}

const styles = StyleSheet.create({

    background:{
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
    backButton:{

    },
    header:{

    },
    headerText: {

    },

})

export default Preferences;
*/