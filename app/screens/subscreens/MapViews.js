// import React, { Component, useState } from "react";
// import {
//   SafeAreaView,
//   FlatList,
//   StyleSheet,
//   View,
//   FastView
//   Dimensions,
//   Image,
// } from "react-native";
// import FastImage from "react-native-fast-image";

// //grabs width of screen
// const SCREEN_WIDTH = Dimensions.get("window").width;

// export default class MapViews extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       images: [],
//     };
//   }
//   render() {
//     return (
//       <FlatList
//         horizontal={true}
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//         data={images} //probably needs something with state to make it work
//         legacyImplementation={false}
//         renderItem={({ item, index }) => {
//           <FastView
//             style={{
//               width: SCREEN_WIDTH + 5,
//               height: "auto",
//               flexDirection: "row",
//             }}
//           >
//             <Image
//               source={{ uri: item.source.uri }} //use this to set image soruce
//               key={index} //important to set a key for list items, shouldn't use indexes as keys but may still work
//               style={
//                 styles.photo //hasn't been made
//               }
//             />
//           </FastView>;
//         }}
//         style={{ width: SCREEN_WIDTH + 5, height: "100%" }}
//       />
//     );
//   }
// }
