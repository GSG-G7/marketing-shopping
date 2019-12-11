import React from "react";
import { View } from "react-native";

import Input from "../../common/Input";
import BtnUploadImg from "../../common/BtnUploadImg";

const SignUp = () => (
  <View>
    <Input placeholder="Username" iconName="person" />
    <Input placeholder="Email" iconName="email" />
    <Input placeholder="Password" iconName="lock" />
    <Input placeholder="Confirm Password" iconName="check-circle" />
    <Input placeholder="Phone Number" iconName="phone-android" />
    <BtnUploadImg text="Click to upload your profile image" />
  </View>
);

export default SignUp;
