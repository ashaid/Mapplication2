import "react-native-reanimated";
import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "../app/screens/WelcomeScreen";

test("renders correctly", () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
