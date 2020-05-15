import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./Screens/HomeScreen";
import MainNavigator from "./navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
