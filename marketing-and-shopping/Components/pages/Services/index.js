import React, { Component } from "react";
import { View } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import SearchInput from "../../common/SearchInput";
import CardWithHeader from "../../common/CardWithHeader";

import { objInfo } from "./data";

import generalStyle from "../CommonStyle";
import services from "./style";

export class Services extends Component {
  render() {
    return (
      <View>
        <HeaderAndMenu head="Services" />
        <View style={[generalStyle.container, services.parent]}>
          <SearchInput />
          <CardWithHeader objInfo={objInfo} />
        </View>
      </View>
    );
  }
}

export default Services;
