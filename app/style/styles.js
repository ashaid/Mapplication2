import { StyleSheet } from "react-native";

const Colors = {
  primary: "#ffc200",
  secondary: "#875afb",
  tertiary: "#131313",
  white: "#fff",
};

const Style = StyleSheet.create({
  f1: { flex: 1 },
  f2: { flex: 2 },
  f3: { flex: 3 },
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
});

export { Colors, Style };
