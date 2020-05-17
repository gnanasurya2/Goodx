import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import ProfileDetailsScreen from "../Screens/ProfileDetailsScreen";
import FaqScreen from "../Screens/HelpAndSupportScreen";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
