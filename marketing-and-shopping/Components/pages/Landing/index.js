import React from "react";
import { View, SafeAreaView } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HeaderLandingPage from "../../common/HeaderLandingPage";
import Slider from "./slider";
import About from "./about";
import Contact from "./contact";
import { data } from "./data";

const Landing = props => {
  const {
    navigation: { navigate }
  } = props;

  const navigateToSignup = () => {
    navigate("SignUp");
  };

  return (
    <View>
      <HeaderLandingPage navigateToSignup={navigateToSignup} />
      <Slider arrayOfImages={data} />
      <About />
      <Contact />
    </View>
  );
};

export default Landing;
