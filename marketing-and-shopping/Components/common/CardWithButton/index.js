import React from "react";
import { View, TouchableOpacity, Image, Text, Button } from "react-native";

import generalStyle from "../CommonStyle";
import card from "./style";

const CardWithButton = ({ objInfo, type }) => (
  <View style={[generalStyle.container, card.parent]}>
    {objInfo.map((e, i) => (
      <View style={[card.cardContainer]} key={i}>
        <TouchableOpacity style={[card.imgContainer]}>
          <Image source={{ uri: e.imgUrl }} style={[card.img]} />
          <Text style={[generalStyle.mainColor, card.text]}>{e.head}</Text>
        </TouchableOpacity>

        {type === "delete" ? (
          <TouchableOpacity
            style={[generalStyle.mainBgColor, card.btn, card.btnDelete]}
          >
            <Text
              style={[generalStyle.firsColor, card.btnText, card.btnDeleteText]}
            >
              Remove Product
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[generalStyle.mainBgColor, card.btn]}>
            <Text style={[generalStyle.firsColor, card.btnText]}>
              Add Comment
            </Text>
          </TouchableOpacity>
        )}
      </View>
    ))}
  </View>
);

export default CardWithButton;
