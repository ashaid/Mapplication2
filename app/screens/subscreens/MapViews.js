import React, { Component, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, View, Dimensions, Image } from "react-native";
import FastImage from "react-native-fast-image";

//grabs width of screen
const SCREEN_WIDTH = Dimensions.get("window").width;
//put data array here and set it equal to this, idk how to use state, the below may be wrong
const [images, setImages] = useState([{/*idk what goes here if anything*/}])
export default class MapViews extends Component
{
    render()
    {
        return(
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={images} //probably needs something with state to make it work
                legacyImplementation={false}
                renderItem ={({item, index}) =>
                {
                    <View style = {{width: SCREEN_WIDTH + 5, height: 'auto', flexDirection: 'row'}}>
                        <FastImage
                            source={{uri: item.source.uri}} //use this to set image soruce
                            key={index} //important to set a key for list items, shouldn't use indexes as keys but may still work
                            resizeMode = { FastImage.resizeMod1e.contain }
                            style={
                                styles.photo//hasn't been made
                            }
                            
                        />
                    </View>
                }}
                style={{width:SCREEN_WIDTH + 5, height: '100%'}}
            />
        );  
    }
}
