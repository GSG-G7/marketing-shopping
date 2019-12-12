import React, { Component } from "react";
import { View } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import SearchInput from "../../common/SearchInput";
import CardWithButton from "../../common/CardWithButton";
import { objInfo } from "./data";

import genetalStyle from "../CommonStyle";
import provided from "./style";

class ProductAdded extends Component {
  render() {
    return (
      <View>
        <HeaderAndMenu
          head="Products Added"
          goback={() => {
            props.navigation.goBack();
          }}
        />
        <View style={[genetalStyle.container, provided.parent]}>
          <SearchInput />
          <CardWithButton objInfo={objInfo} />
        </View>
      </View>
    );
  }
}

export default ProductAdded;
