import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import ProductDetailScreen from "../Screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
