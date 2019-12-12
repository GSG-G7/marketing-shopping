import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ServiceName from "../ServiceName";
import HeaderAndMenu from "../../common/HeaderAndMenu";
import SearchInput from "../../common/SearchInput";
import CardWithHeader from "../../common/CardWithHeader";

import { objInfo } from "./data";
import generalStyle from "../CommonStyle";
import services from "./style";

export class Services extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;

    const navigateToServiceName = () => {
      navigate("ServiceName");
    };

    return (
      <View>
        <HeaderAndMenu
          head="Services"
          goback={() => {
            props.navigation.goBack();
          }}
        />
        <View style={[generalStyle.container, services.parent]}>
          <SearchInput />
          <CardWithHeader
            objInfo={objInfo}
            navigationTo={navigateToServiceName}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Services: {
    screen: Services
  },

  ServiceName: {
    screen: ServiceName
  },

  headerMode: "none"
});

// export default createAppContainer(AppNavigator);
export default Services;
