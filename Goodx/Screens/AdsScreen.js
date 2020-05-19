import React, { useEffect } from "react";

import { FlatList, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TopBar from "../Components/TopBar";
import Favourites from "../Components/Favourites";
import * as ActionTypes from "../store/actions/actionTypes";

const AdsScreen = (props) => {
  const data = useSelector((state) => state.products.myProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionTypes.fetchProducts("Myproducts"));
  }, []);
  return (
    <View>
      <TopBar title="My products" />
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

export default AdsScreen;
