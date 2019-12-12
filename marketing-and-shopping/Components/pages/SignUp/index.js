import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Services from "../Services";
import HeaderWithoutMenu from "../../common/HeaderWithoutMenu";
import Picker from "../../common/Picker";

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
    const {
      navigation: { navigate, goBack }
    } = this.props;

    const selectFunc = e => {
      this.setState({ accountType: e });
    };

    const navigateToHome = () => {
      navigate("Services");
    };

    const goBackfunc = () => {
      console.log("goBack");
      goBack();
    };

    return (
      <View>
        <HeaderWithoutMenu head="SignUp" goback={goBackfunc} />

        <View style={[generalStyle.container]}>
          <Picker items={["Client", "Vendor"]} selectFunc={selectFunc} />

          {accountType === "Client" ? (
            <Client signupFunc={navigateToHome} />
          ) : (
            <Vendor signupFunc={navigateToHome} />
          )}

          <View style={[signUp.text]}>
            <Text style={[generalStyle.firsColor]}>Already have account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate("SignIn");
              }}
            >
              <Text style={[generalStyle.firsColor, signUp.link]}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp
  },

  Services: {
    screen: Services
  },

  headerMode: "none"
});

// export default createAppContainer(AppNavigator)
export default SignUp;
