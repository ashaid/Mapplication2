import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background}>

        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")}/>
          <Text style={styles.logoText}>Mapplication 1.5</Text>
        </View>
           <View style={styles.loginButton}>
               <Text style={styles.buttonText}>Sign In</Text>
               </View> 
           <View style={styles.registerButton}>
               <Text style={styles.buttonText}>Create Account</Text>
               </View> 
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#131313",

    },
    buttonText: {
        top: 17,
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 20,
    },
    loginButton:{
        width: '100%',
        height:70,
        backgroundColor: "#ffc200",
        alignItems: "center",
    },
    logo: {
        width: 250,
        height: 160,
    },
    logoContainer:{
        position: 'absolute',
        top: 250,
        alignItems: "center",
    },
    logoText:{
        top: 10,
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 15,
    },
    registerButton:{
        width: '100%',
        height:70,
        backgroundColor: "#875afb",
        alignItems: "center",
    }
})

export default WelcomeScreen;