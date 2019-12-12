import React, { Component } from "react";
import { View } from "react-native";

import Input from "../../common/Input";
import ButtonPrimary from "../../common/ButtonPrimary";

import BtnUploadImg from "../../common/BtnUploadImg";

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
        <Input
          placeholder="Username"
          iconName="person"
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <Input
          placeholder="Email"
          iconName="email"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <Input
          placeholder="Password"
          iconName="lock"
          onChange={e => {
            this.setState({ pass: e.target.value });
          }}
        />
        <Input
          placeholder="Confirm Password"
          iconName="check-circle"
          onChange={e => {
            this.setState({ confirm: e.target.value });
          }}
        />
        <Input
          placeholder="Phone Number"
          iconName="phone-android"
          onChange={e => {
            this.setState({ phone: e.target.value });
          }}
        />
        <BtnUploadImg
          text="Click to upload your profile image"
          // onChange={e => {
          //   this.setState({ img: e.target.value });
          // }}
        />

        <ButtonPrimary text="SignUp" position="center" pressFunc={signupFunc} />
      </View>
    );
  }
}

export default SignUp;
// export default createAppContainer(AppNavigator);
