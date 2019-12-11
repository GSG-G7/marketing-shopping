import React from "react";
import { View } from "react-native";

import Input from "../../common/Input";
import BtnUploadImg from "../../common/BtnUploadImg";
import Picker from "../../common/Picker";

const servicesName = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
  "Service 7"
];

const SignUp = () => (
  <View>
    <Input placeholder="Market name" iconName="person" />
    <Input placeholder="Email" iconName="email" />
    <Input placeholder="Password" iconName="lock" />
    <Input placeholder="Confirm Password" iconName="check-circle" />
    <Input placeholder="Phone Number" iconName="phone-android" />
    <BtnUploadImg text="Click to upload your market Image" />
    <Input placeholder="Country" iconName="public" />
    <Input placeholder="City" iconName="location-city" />
    <Picker items={["Delivery service (none)", "Paid", "Free"]} />
    <Picker items={servicesName} />
  </View>
);

export default SignUp;
