import React from "react";
import { View, TextInput } from "react-native";

import Icon from "@expo/vector-icons/build/MaterialIcons";
import general from "../CommonStyle";
import textarea from "./style";

const Textarea = ({ placeholder, iconName }) => (
  <View style={[textarea.parent]}>
    <Icon
      name={iconName}
      style={[general.firsColor, general.secondBgColor, textarea.icon]}
    />
    <TextInput
      placeholder={placeholder}
      style={[general.secondBgColor, textarea.field]}
      multiline={true}
      numberOfLines={10}
    />
  </View>
);

export default Textarea;
