import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AddProductScreen from "../pages/AddProduct";
import LandingScreen from "../pages/Landing";
import ProductScreen from "../pages/Product";
import ProductAddedScreen from "../pages/ProductAdded";
import ProductsProvidedScreen from "../pages/ProductsProvided";
import ServiceNameScreen from "../pages/ServiceName";
import ServicesScreen from "../pages/Services";
import SignInScreen from "../pages/SignIn";
import SignUpScreen from "../pages/SignUp";

const AppNavigator = createStackNavigator({
  Landing: LandingScreen,
  AddProduct: AddProductScreen,
  Product: ProductScreen,
  ProductAdded: ProductAddedScreen,
  ProductsProvided: ProductsProvidedScreen,
  ServiceName: ServiceNameScreen,
  Services: ServicesScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(AppNavigator);
