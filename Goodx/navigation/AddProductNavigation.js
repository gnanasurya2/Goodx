import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellScreen from "../Screens/SellScreen";
import AddDetailsScreen from "../Screens/AddDetailsScreen";
import AddImagesScreen from "../Screens/AddImagesScreeen";
import ProductPostedScreen from "../Screens/ProductPostedScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Sell" component={SellScreen} />
      <Stack.Screen name="AddDetails" component={AddDetailsScreen} />
      <Stack.Screen name="AddImages" component={AddImagesScreen} />
      <Stack.Screen name="ProductPosted" component={ProductPostedScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
