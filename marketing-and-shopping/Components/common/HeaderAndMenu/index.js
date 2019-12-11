import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import Sidebar from "./Sidebar";
import generalStyle from "../CommonStyle";
import header from "./style";

class HeaderAndMenu extends Component {
  state = { opend: false };

  openMenu = () => {
    this.setState({ opend: true });
  };

  closedMenu = () => {
    this.setState({ opend: false });
  };

  render() {
    const { head, goBackFunc } = this.props;
    const { opend } = this.state;

    return (
      <View>
        <View
          style={[
            generalStyle.mainBgColor,
            generalStyle.container,
            header.parent
          ]}
        >
          <TouchableOpacity onPress={goBackFunc}>
            <Icon
              name="arrow-back"
              style={[generalStyle.firsColor, header.icon]}
            />
          </TouchableOpacity>

          <Text style={[generalStyle.firsColor, header.text]}>{head}</Text>

          <TouchableOpacity onPress={this.openMenu}>
            <Icon name="menu" style={[generalStyle.firsColor, header.icon]} />
          </TouchableOpacity>
        </View>

        {opend && <Sidebar closedMenu={this.closedMenu} />}
      </View>
    );
  }
}

export default HeaderAndMenu;
