import React, { Component } from "react";
import { View } from "react-native";

import Input from "../../common/Input";
import BtnUploadImg from "../../common/BtnUploadImg";
import Picker from "../../common/Picker";
import ButtonPrimary from "../../common/ButtonPrimary";

const servicesName = [
  "cars",
  "mobiles",
  "computers",
  "fashions",
  "shoes",
  "watches",
  "furniture",
  "houseware",
  "electrical tools",
  "food"
];

class SignUp extends Component {
  state = {
    name: null,
    email: null,
    pass: null,
    confirm: null,
    phone: null,
    img: null
  };
  render() {
    const { signupFunc } = this.props;
    return (
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
        <ButtonPrimary text="SignUp" position="center" pressFunc={signupFunc} />
      </View>
    );
  }
}

export default SignUp;
