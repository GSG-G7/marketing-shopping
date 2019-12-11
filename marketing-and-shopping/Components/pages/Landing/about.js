import React from "react";
import { View, Text } from "react-native";

import generalStyle from "../CommonStyle";
import { about } from "./style";

const About = () => {
  return (
    <View style={[generalStyle.container, about.parent]}>
      <Text style={[about.header]}>About Us: </Text>
      <Text style={[generalStyle.firsColor, about.text]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  );
};

export default About;
