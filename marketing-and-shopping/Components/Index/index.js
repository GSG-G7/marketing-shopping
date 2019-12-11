import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import BtnUploadImg from "../common/BtnUploadImg";

export class Index extends Component {
  arr = [
    {
      imgUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      head: "header card 1"
    },

    {
      imgUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      head: "header card 2"
    },

    {
      imgUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      head: "header card 3"
    }
  ];

  render() {
    return (
      <SafeAreaView>
        <BtnUploadImg text="Upload Profile Image" />
      </SafeAreaView>
    );
  }
}

export default Index;
