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
          clicked={() => props.clicked("Books")}
        />
        <Category
          iconName="bike"
          title="Bicycle"
          backgroundColor="#85DCB0"
          clicked={() => props.clicked("Bicycle")}
        />
        <Category
          iconName="cellphone"
          title="Electronics"
          backgroundColor="#E8A87C"
          clicked={() => props.clicked("Electronics")}
        />
      </View>
      <View style={styles.categoryRow}>
        <Category
          iconName="notebook"
          title="Notes"
          backgroundColor="#C38D9E"
          clicked={() => props.clicked("Notes")}
        />
        <Category
          iconName="math-compass"
          title="Engineering Accessories"
          backgroundColor="#41B3A3"
          clicked={() => props.clicked("Engineering Accessories")}
        />
        <Category
          iconName="guitar-acoustic"
          title="Miscellanous"
          backgroundColor="#F64C72"
          clicked={() => props.clicked("Miscellanous")}
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
