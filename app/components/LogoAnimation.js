import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

function Wobble(props) {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        title="wobble"
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-180, { duration: 300 }),
            withRepeat(withTiming(180, { duration: 600 }), 2, true),
            withTiming(0, { duration: 300 })
          );
        }}
      >
        <Animated.Image
          style={[styles.box, animatedStyle]}
          source={require("../assets/logo.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 250,
    height: 150,
    display: "flex",
  },
});

export { Wobble };
