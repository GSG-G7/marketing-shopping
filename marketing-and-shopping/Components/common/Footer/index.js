import React from "react";
import { View, Text } from "react-native";

import generalStyle from "../CommonStyle";
import footer from "./style";

const Footer = () => (
  <View style={[generalStyle.firstBgColor, footer.parent]}>
    <Text style={[generalStyle.mainColor, footer.text]}>
      CopyRight&copy;2020 M&#x214B;S All rights reserved
    </Text>
  </View>
);

export default Footer;
