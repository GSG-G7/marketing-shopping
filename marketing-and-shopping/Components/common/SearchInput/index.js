import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import generalStyle from "../CommonStyle";
import search from "./style";

class SearchInput extends Component {
  render() {
    return (
      <View style={[search.parent]}>
        <TextInput
          placeholder="Search"
          style={[generalStyle.secondBgColor, search.field]}
        />
        <Icon name="search" style={[generalStyle.firsColor, search.icon]} />
      </View>
    );
  }
}

export default SearchInput;
