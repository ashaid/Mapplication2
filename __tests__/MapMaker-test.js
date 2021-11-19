import "react-native-reanimated";
import "axios";
import axios from "axios";
import React from "react";
import renderer from "react-test-renderer";
import MapDisplay from "../app/screens/MapDisplay";
import { TextInput } from "react-native-gesture-handler";

test("tests,", () => {
  const wrapped = mount(<MapDisplay />);
  expect(wrapped.find("startingRoom").get(0).props.value.toEqual("something"));
});
