import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./MainNavigator";
import SignInNavigator from "./SignInNavigation";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Signup">
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="Signup" component={SignInNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
