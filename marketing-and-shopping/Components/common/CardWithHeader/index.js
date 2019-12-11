import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import generalStyle from "../CommonStyle";
import card from "./style";

const CardWithHeader = ({ objInfo }) => (
  <View style={[generalStyle.container, card.parent]}>
    {objInfo.map((e, i) => (
      <TouchableOpacity style={[card.cardContainer]} key={i}>
        <Image source={{ uri: e.imgUrl }} style={[card.img]} />
        <Text style={[generalStyle.firsColor, card.text]}>{e.head}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CardWithHeader;
