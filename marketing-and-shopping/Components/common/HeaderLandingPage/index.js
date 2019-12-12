import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import generalStyle from "../CommonStyle";
import headerLanding from "./style";

class HeaderLanding extends Component {
  render() {
    const { navigateToSignup } = this.props;

    return (
      <View style={[generalStyle.mainBgColor, headerLanding.parent]}>
        <View style={[generalStyle.firstBgColor, headerLanding.logo]}>
          <Text style={[generalStyle.mainColor, headerLanding.logoText]}>
            M&#x214B;S
          </Text>
        </View>

        <TouchableOpacity
          style={[generalStyle.firstBgColor, headerLanding.signUpBtn]}
          onPress={navigateToSignup}
        >
          <Text style={[generalStyle.mainColor, headerLanding.signUpBtnText]}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeaderLanding;
