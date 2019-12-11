import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import generalStyle from "../CommonStyle";
import button from "./style";

const ButtonPrimary = ({ text, pressFunc }) => (
  <View>
    <TouchableOpacity
      style={[generalStyle.firstBgColor, button.parent]}
      onPress={pressFunc}
    >
      <Text style={[generalStyle.mainColor, button.text]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default ButtonPrimary;
