import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { Style, Colors } from "../style/styles";

class SplashEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LottieView
        ref={(animation) => {
          this.splash_effect = animation;
        }}
        source={require("../assets/splash_effect.json")}
        autoPlay
        loop={true}
        speed={1}
        style={{
          transform: [{ scale: 1 }],
          //   position: "absolute",
          //   borderWidth: 2,
          //   borderColor: "red",
        }}
      />
    );
  }
}

export { SplashEffect };
