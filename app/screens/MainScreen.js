import React from 'react';
import { ImageBackground } from 'react-native';

function MainScreen(props) {
    return (
        <ImageBackground style={styles.background}>

            <View style={styles.mapTab}>

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
    mapTab: {

    },
})

export default MainScreen;