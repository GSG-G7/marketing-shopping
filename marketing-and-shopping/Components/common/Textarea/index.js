import React from "react";
import { View, TextInput } from "react-native";

import Icon from "@expo/vector-icons/build/MaterialIcons";
import general from "../CommonStyle";
import textarea from "./style";

const Textarea = ({ placeholder, iconName }) => (
  <View style={[textarea.parent]}>
    <Icon name={iconName} style={[textarea.icon, general.mainColor]} />
    <TextInput placeholder={placeholder} style={[textarea.field]} />
  </View>
);

export default Textarea;
