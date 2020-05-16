import React from "react";

import { Text, View, StyleSheet } from "react-native";
import TopBar from "../Components/TopBar";
import Favourites from "../Components/Favourites";

const AdsScreen = (props) => {
  return (
    <View>
      <TopBar />
      <Favourites
        title=" Harry potter"
        description=" It's a different harry potter book"
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default AdsScreen;
