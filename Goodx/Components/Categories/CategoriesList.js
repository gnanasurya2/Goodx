import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Category from "./Category";

const CategoriesList = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.categoryRow}>
        <Category
          iconName="book-open-variant"
          title="Books"
          backgroundColor="#E27D60"
        />
        <Category iconName="bike" title="Bicycle" backgroundColor="#85DCB0" />
        <Category
          iconName="cellphone"
          title="Electronics"
          backgroundColor="#E8A87C"
        />
      </View>
      <View style={styles.categoryRow}>
        <Category iconName="notebook" title="Notes" backgroundColor="#C38D9E" />
        <Category
          iconName="math-compass"
          title="Engineering Accessories"
          backgroundColor="#41B3A3"
        />
        <Category
          iconName="guitar-acoustic"
          title="Miscellanous"
          backgroundColor="#F64C72"
        />
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  categoryRow: {
    flexDirection: "row",
  },
});

export default CategoriesList;
