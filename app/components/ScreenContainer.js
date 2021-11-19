import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";


export const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
  );

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
});
