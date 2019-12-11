import React from "react";
import { View, TextInput } from "react-native";

import Icon from "@expo/vector-icons/build/MaterialIcons";
import generalStyle from "../CommonStyle";
import input from "./style";

const Input = ({ placeholder, iconName }) => (
  <View style={[input.parent]}>
    <Icon
      name={iconName}
      style={[generalStyle.secondBgColor, generalStyle.firsColor, input.icon]}
    />
    <TextInput
      placeholder={placeholder}
      style={[generalStyle.secondBgColor, input.field]}
    />
  </View>
);
export default Input;
