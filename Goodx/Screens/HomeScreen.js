import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/colors";
import Firebase from "../constants/firebase";

import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import CategoriesList from "../Components/Categories/CategoriesList";
import Product from "../Components/Product/Product";

const HomeScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let first = Firebase.firestore().collection("Product");
    let paginate = first.get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setData(data);
    });
  }, []);

  const searchTextChangeHandler = (text) => {
    setSearchText(text);
  };

  const categoryClickHandler = (title) => {
    setSearchText(`Category:${title}`);
  };
  const productClickHandler = (item, imageUris, phoneNumber) => {
    console.log({ phoneNumber });
    props.navigation.navigate("ProductDetail", {
      price: item.price,
      title: item.title,
      description: item.description,
      images: imageUris,
      phoneNumber: phoneNumber,
    });
  };

  const ProductRenderer = (item, imageUris, phoneNumber, itemData) => {
    return (
      <Product
        image={imageUris[0]}
        cost={item.price}
        description={item.title}
        data={itemData}
        clicked={() => productClickHandler(item, imageUris, phoneNumber)}
      />
    );
  };

  return (
    <View>
      <TopBar />
      <SearchBar searchText={searchText} onChange={searchTextChangeHandler} />
      {loading ? (
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
          renderItem={({ item }) =>
            ProductRenderer(item.data, item.images, item.phoneNumber, item)
          }
          numColumns={2}
        />
      ) : (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = new StyleSheet.create({
  subHeading: {
    paddingLeft: 10,
    fontSize: 18,
    color: "grey",
  },
  activity: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
