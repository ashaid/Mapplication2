import React, { useState, useRef, Component} from "react";
import "react-native-reanimated";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    Dimensions
} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMb_SIZE = 80;

const IMAGES = {
    image1: require('../../assets/images/1.png'),
    image2: require('../../assets/images/2.png'),
}

export default class MapViews
{
    render(){
        const [images, setImages] = useState([
            { id: '1', image: IMAGES.image1 },
            { id: '2', image: IMAGES.image2 }, 
        ]);
    return(
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 32, marginTop: 50, marginBottom: 25}}>
                Map Viewer
            </Text>
            <View style={{flex: 1 / 2, marginTop: 20}}>
                <Carousel
                    layout='default'
                    data={images}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={({ item, index })=>(
                        <Image
                            key={index}
                            style={{ width: '100% ', height: '100%' }}
                            resizeMode='contain'
                            source={item.image}
                        />
                    )
                
                }
                />
            </View>
        </View>
    );    
 }
}

const styles = StyleSheet.create({


})