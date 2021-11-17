import "react-native-reanimated";
import "axios";
import axios from "axios";
import React from "react";
import renderer from "react-test-renderer";
import apiTestHelper from "../app/screens/MapDisplay";

jest.mock("axios");

test("axios test", async () => {
  axios.get.mockResolvedValue({
    data: [{ data: 5 }],
  });
  let testData = await apiTestHelper();
  expect(testData).toEqual("5");
});
