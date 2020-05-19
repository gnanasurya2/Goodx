import React, { useEffect } from "react";

import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Favourites from "../Components/Favourites";
import TopBar from "../Components/TopBar";
import * as actionTypes from "../store/actions/actionTypes";

const FavouritesScreen = (props) => {
  const data = useSelector((state) => state.products.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionTypes.fetchProducts("Favourites"));
  }, []);

  return (
    <View>
      <TopBar title="Favourites" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Favourites title={item.title} description={item.description} />
        )}
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default FavouritesScreen;
