import React, { useState } from "react";

import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import Colors from "../constants/colors";

import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import CategoriesList from "../Components/Categories/CategoriesList";
import Product from "../Components/Product/Product";

const data = [
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
  { cost: "213124", description: "ghbhafshufkfsks" },
];
const HomeScreen = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchTextChangeHandler = (text) => {
    setSearchText(text);
  };

  const categoryClickHandler = (title) => {
    console.log(title);
  };
  const productClickHandler = (item) => {
    props.navigation.navigate("ProductDetail", {
      price: item.cost,
      description: item.description,
    });
  };
  return (
    <View>
      <TopBar />
      <SearchBar searchText={searchText} onChange={searchTextChangeHandler} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.subHeading}>Browse categories:</Text>
            <CategoriesList clicked={categoryClickHandler} />
            <Text style={styles.subHeading}>Fresh recommendations:</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Product
            cost={item.cost}
            description={item.description}
            clicked={() => productClickHandler(item)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  subHeading: {
    paddingLeft: 10,
    fontSize: 18,
    color: "grey",
  },
  list: {},
});

export default HomeScreen;
