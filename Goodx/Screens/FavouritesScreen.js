import React from "react";

import { Text, ScrollView, StyleSheet } from "react-native";
import Favourites from "../Components/Favourites";
import TopBar from "../Components/TopBar";

const FavouritesScreen = (props) => {
  return (
    <ScrollView>
      <TopBar title="Favourites" />
      <Favourites title="Harry potter" description="It's a harry potter book" />
      <Favourites title="Harry potter" description="It's a harry potter book" />
    </ScrollView>
  );
};

const styles = new StyleSheet.create({});

export default FavouritesScreen;
