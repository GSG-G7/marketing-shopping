import React from "react";
import { View } from "react-native";

import HeaderAndMenu from "../../common/HeaderAndMenu";
import Input from "../../common/Input";
import Textarea from "../../common/Textarea";
import BtnUploadImg from "../../common/BtnUploadImg";
import ButtonPrimary from "../../common/ButtonPrimary";

import generalStyle from "../CommonStyle";
import add from "./style";

const AddProduct = () => (
  <View>
    <HeaderAndMenu head="Add Product" />

    <View style={[generalStyle.container, add.parent]}>
      <Input placeholder="Product Name" />
      <Input placeholder="Product Price" />
      <Textarea placeholder="Product Description" />
      <BtnUploadImg text="Upload Product Image" />
      <ButtonPrimary text="Add Product" position="center" />
    </View>
  </View>
);

export default AddProduct;
