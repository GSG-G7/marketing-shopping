import React from "react";
import { View } from "react-native";

import generalStyle from "../CommonStyle";

import Input from "../../common/Input";
import ButtonPrimary from "../../common/ButtonPrimary";
import Textarea from "../../common/Textarea";

const Contact = () => {
  return (
    <View style={[generalStyle.container, generalStyle.mainBgColor]}>
      <Input placeholder="Name" iconName="person" />
      <Input placeholder="Email" iconName="email" />
      <Textarea placeholder="Message" iconName="message" />
      <ButtonPrimary text="Send" position="right" />
    </View>
  );
};

export default Contact;
