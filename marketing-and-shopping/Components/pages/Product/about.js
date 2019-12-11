import React from "react";
import { View, Text } from "react-native";

import generalStyle from "../CommonStyle";
import { about } from "./style";

const About = () => (
  <View style={[generalStyle.container, about.parent]}>
    <Text style={[about.header]}>About the product</Text>

    <View style={[about.info]}>
      <Text style={[about.title]}>Price: </Text>
      <Text style={[generalStyle.firsColor, about.details]}>1000$</Text>
    </View>

    <View style={[about.info]}>
      <Text style={[about.title]}>Country: </Text>
      <Text style={[generalStyle.firsColor, about.details]}>Country</Text>
    </View>

    <View style={[about.info]}>
      <Text style={[about.title]}>City: </Text>
      <Text style={[generalStyle.firsColor, about.details]}>City</Text>
    </View>

    <View style={[about.info]}>
      <Text style={[about.title]}>Delivery inside the city: </Text>
      <Text style={[generalStyle.firsColor, about.details]}>Free</Text>
    </View>

    <View style={[about.info, about.desc]}>
      <Text style={[about.title]}>Description: </Text>
      <Text style={[generalStyle.firsColor, about.details]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
    </View>
  </View>
);

export default About;
