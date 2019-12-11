import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import generalStyle from "../CommonStyle";
import button from "./style";

const ButtonPrimary = ({ text, pressFunc, position }) => (
  <View>
    {position === "center" ? (
      <View>
        <TouchableOpacity
          style={[generalStyle.firstBgColor, button.parent, button.center]}
          onPress={pressFunc}
        >
          <Text style={[generalStyle.mainColor, button.text]}>{text}</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <TouchableOpacity
          style={[generalStyle.firstBgColor, button.parent]}
          onPress={pressFunc}
        >
          <Text style={[generalStyle.mainColor, button.text]}>{text}</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default ButtonPrimary;
