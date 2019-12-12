import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import HeaderWithoutMenu from "../../common/HeaderWithoutMenu";
import Input from "../../common/Input";
import ButtonPrimary from "../../common/ButtonPrimary";

import generalStyle from "../CommonStyle";
import signIn from "./style";

class SignIn extends Component {
  state = {};
  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <View>
        <HeaderWithoutMenu
          head="SignIn"
          goback={() => {
            props.navigation.goBack();
          }}
        />

        <View style={[generalStyle.container, signIn.parent]}>
          <Input placeholder="Email" iconName="email" />
          <Input placeholder="Password" iconName="lock" />
          <ButtonPrimary
            text="SignIn"
            position="center"
            pressFunc={() => {
              navigate("Services");
            }}
          />

          <View style={[signIn.text]}>
            <Text style={[generalStyle.firsColor]}>
              Don’t have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate("SignUp");
              }}
            >
              <Text style={[generalStyle.firsColor, signIn.link]}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;
