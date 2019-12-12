import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import generalStyle from "../CommonStyle";
import card from "./style";

const CardWithHeader = ({ objInfo, navigationTo }) => (
  <View style={[card.parent]}>
    {objInfo.map((e, i) => (
      <TouchableOpacity
        style={[card.cardContainer]}
        key={i}
        onPress={navigationTo}
      >
        <Image source={{ uri: e.imgUrl }} style={[card.img]} />
        <Text style={[generalStyle.firsColor, card.text]}>{e.head}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CardWithHeader;
