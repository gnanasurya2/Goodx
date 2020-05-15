import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import FavouritesScreen from "../Screens/Favourites";
import AdsScreen from "../Screens/AdsScreen";
import SellScreen from "../Screens/SellScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductNavigation from "./productNavigation";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const createIcon = (name, color, size) => (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "black", keyboardHidesTabBar: true }}
    >
      <Tab.Screen
        name="Home"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({ color, size }) => createIcon("home", color, size),
        }}
      />
      <Tab.Screen
        name="favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => createIcon("heart", color, size),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarIcon: ({ color, size }) => createIcon("plus", color, size),
        }}
      />
      <Tab.Screen
        name="My ads"
        component={AdsScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            createIcon("note-multiple", color, size),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => createIcon("account", color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
