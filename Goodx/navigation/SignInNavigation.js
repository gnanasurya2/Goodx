import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../Screens/SignUpScreen";
import PhoneNumberAuth from "../Screens/PhoneNumberAuthScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberAuth} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
