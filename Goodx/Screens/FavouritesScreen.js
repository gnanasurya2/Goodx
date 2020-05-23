import React, { useEffect } from "react";

import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Firebase from "../constants/firebase";

import Favourites from "../Components/Favourites";
import TopBar from "../Components/TopBar";
import * as actionTypes from "../store/actions/actionTypes";

const FavouritesScreen = (props) => {
  const data = useSelector((state) => state.products.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionTypes.fetchProducts("Favourites"));
  }, []);

  const productClickHandler = async (item) => {
    await Firebase.firestore()
      .collection("Product")
      .where("timeStamp", "==", item.timeStamp)
      .limit(1)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data();
          props.navigation.navigate("Home", {
            screen: "ProductDetail",
            params: {
              images: data.images,
              price: data.data.price,
              phoneNumber: data.phoneNumber,
              description: data.data.description,
              title: data.data.title,
            },
          });
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <TopBar title="Favourites" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Favourites
            title={item.title}
            description={item.description}
            clicked={() => productClickHandler(item)}
          />
        )}
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default FavouritesScreen;
