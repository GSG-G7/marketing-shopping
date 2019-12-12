import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Product from "../Product";
import HeaderAndMenu from "../../common/HeaderAndMenu";
import SearchInput from "../../common/SearchInput";
import CardWithHeader from "../../common/CardWithHeader";
import ButtonPrimary from "../../common/ButtonPrimary";

import { objInfo } from "./data";

import generalStyle from "../CommonStyle";
import services from "./style";

class Services extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;

    const toProductPage = () => {
      navigate("Product");
    };

    return (
      <View>
        <HeaderAndMenu
          head="Service Name"
          goback={() => {
            props.navigation.goBack();
          }}
        />
        <View style={[generalStyle.container, services.parent]}>
          <SearchInput />
          <CardWithHeader objInfo={objInfo} navigationTo={toProductPage} />
          <ButtonPrimary text="See More" />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Services: {
    screen: Services
  },

  Product: {
    screen: Product
  },

  headerMode: "none"
});

// export default createAppContainer(AppNavigator);
export default Services;
