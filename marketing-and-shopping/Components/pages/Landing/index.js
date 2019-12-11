import React from "react";
import { View } from "react-native";

import HeaderLandingPage from "../../common/HeaderLandingPage";
import Slider from "./slider";
import About from "./about";
import Contact from "./contact";
import { data } from "./data";

const Landing = () => (
  <View>
    <HeaderLandingPage />
    <Slider arrayOfImages={data} />
    <About />
    <Contact />
  </View>
);

export default Landing;
