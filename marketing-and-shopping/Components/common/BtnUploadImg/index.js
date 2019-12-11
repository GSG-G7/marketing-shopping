import React from "react";
import { TouchableOpacity, Text } from "react-native";

import generalStyle from "../CommonStyle";
import upload from "./style";

const UploadImg = ({ text }) => {
  return (
    <TouchableOpacity style={[generalStyle.firstBgColor, upload.parent]}>
      <Text style={[generalStyle.mainColor, upload.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default UploadImg;
