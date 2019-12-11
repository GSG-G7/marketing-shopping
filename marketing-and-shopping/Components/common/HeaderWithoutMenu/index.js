import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/build/MaterialIcons";

import generalStyle from "../CommonStyle";
import header from "./style";

const HeaderWithoutMenu = ({ head }) => (
  <View
    style={[generalStyle.mainBgColor, generalStyle.container, header.parent]}
  >
    <TouchableOpacity>
      <Icon name="arrow-back" style={[generalStyle.firsColor, header.icon]} />
    </TouchableOpacity>

    <Text style={[generalStyle.firsColor, header.text]}>{head}</Text>
  </View>
);

export default HeaderWithoutMenu;
