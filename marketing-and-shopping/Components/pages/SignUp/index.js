import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import HeaderWithoutMenu from "../../common/HeaderWithoutMenu";
import Picker from "../../common/Picker";
import ButtonPrimary from "../../common/ButtonPrimary";

import Client from "./Client";
import Vendor from "./Vendor";

import generalStyle from "../CommonStyle";
import signUp from "./style";

class SignUp extends Component {
  state = {
    accountType: "Client"
  };
  render() {
    const { accountType } = this.state;

    const selectFunc = e => {
      this.setState({ accountType: e });
    };

    return (
      <View>
        <HeaderWithoutMenu head="SignUp" />

        <View style={[generalStyle.container]}>
          <Picker items={["Client", "Vendor"]} selectFunc={selectFunc} />

          {accountType === "Client" ? <Client /> : <Vendor />}

          <ButtonPrimary text="SignUp" position="center" />

          <View style={[signUp.text]}>
            <Text style={[generalStyle.firsColor]}>Already have account ?</Text>
            <TouchableOpacity>
              <Text style={[generalStyle.firsColor, signUp.link]}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
