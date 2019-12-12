import React, { Component } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";

import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Services from "../pages/Services";
import ServiceName from "../pages/ServiceName";
import Product from "../pages/Product";
import ProductAdded from "../pages/ProductAdded";
import ProductsProvided from "../pages/ProductsProvided";
import AddProduct from "../pages/AddProduct";

export class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView></ScrollView>
        <Landing />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <Services /> */}
        {/* <ServiceName /> */}
        {/* <Product /> */}
        {/* <ProductAdded /> */}
        {/* <ProductsProvided /> */}
        {/* <AddProduct /> */}
      </SafeAreaView>
    );
  }
}

export default Index;
