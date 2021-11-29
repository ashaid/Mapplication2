import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { Style, Colors } from "../style/styles";

class LoadEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LottieView
        ref={(animation) => {
          this.load_effect = animation;
        }}
        source={require("../assets/loading_effect.json")}
        autoPlay
        loop={true}
        speed={0.55}
        style={{
          transform: [{ scale: 0.72 }],
          //   position: "absolute",
          //   borderWidth: 2,
          //   borderColor: "red",
        }}
      />
    );
  }
}

export { LoadEffect };
