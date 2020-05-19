import React from "react";

import { Text, View, StyleSheet } from "react-native";
import CategoriesList from "../Components/Categories/CategoriesList";
const SellScreen = (props) => {
  const categoryClickHandler = (title) => {
    props.navigation.navigate("AddDetails", { category: title });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>
        SELECT THE CATEGORY UNDER WHICH YOUR PRODUCT IS TO BE SOLD
      </Text>
      <CategoriesList clicked={categoryClickHandler} />
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    paddingHorizontal: "10%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
  },
});

export default SellScreen;
