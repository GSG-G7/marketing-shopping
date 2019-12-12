import React, { Component } from "react";
import { View } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import ButtonPrimary from "../../common/ButtonPrimary";
import CardWithButton from "../../common/CardWithButton";
import { objInfo } from "./data";

import genetalStyle from "../CommonStyle";
import added from "./style";

class ProductAdded extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <HeaderAndMenu
          head="Products Added"
          goback={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={[genetalStyle.container, added.parent]}>
          <ButtonPrimary
            text="Add Product"
            pressFunc={() => {
              this.props.navigation.navigate("AddProduct");
            }}
          />
          <CardWithButton objInfo={objInfo} type="delete" />
        </View>
      </View>
    );
  }
}

export default ProductAdded;
