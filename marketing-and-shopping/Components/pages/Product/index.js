import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import ButtonPrimary from "../../common/ButtonPrimary";
import About from "./about";
import SimilarProducts from "./similarProducts";

import generalStyle from "../CommonStyle";
import product from "./style";

const Product = props => (
  <View>
    <HeaderAndMenu
      head="Product Name"
      goback={() => {
        props.navigation.goBack();
      }}
    />

    <View style={[product.content]}>
      <Image
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6M6XqQuBYgncBI6aMa3EmoStoqjcUGaqhjqPyMWSWC2IKYGB&s"
        }}
        style={[product.img]}
      />

      <About />

      <View style={[generalStyle.container]}>
        <ButtonPrimary text="Buy Now" />
      </View>

      <SimilarProducts />
    </View>
  </View>
);

export default Product;
