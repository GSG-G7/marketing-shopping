import React from "react";
import { View, Text } from "react-native";

import CardWithHeader from "../../common/CardWithHeader";
import { objInfo } from "./data";
import generalStyle from "../CommonStyle";
import { similar } from "./style";

export const SimilarProducts = () => (
  <View style={[generalStyle.container]}>
    <Text style={[generalStyle.firsColor, similar.text]}>
      Other Similar Products
    </Text>

    <CardWithHeader objInfo={objInfo} />
  </View>
);

export default SimilarProducts;
