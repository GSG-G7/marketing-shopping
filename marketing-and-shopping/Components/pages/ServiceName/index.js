import React, { Component } from "react";
import { View } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import SearchInput from "../../common/SearchInput";
import CardWithHeader from "../../common/CardWithHeader";
import ButtonPrimary from "../../common/ButtonPrimary";

import { objInfo } from "./data";

import generalStyle from "../CommonStyle";
import services from "./style";

export class Services extends Component {
  render() {
    return (
      <View>
        <HeaderAndMenu head="Service Name" />
        <View style={[generalStyle.container, services.parent]}>
          <SearchInput />
          <CardWithHeader objInfo={objInfo} />
          <ButtonPrimary text="See More" />
        </View>
      </View>
    );
  }
}

export default Services;
