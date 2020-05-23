import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Colors from "../constants/colors";
import Firebase from "../constants/firebase";
import { useSelector, useDispatch } from "react-redux";

import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import CategoriesList from "../Components/Categories/CategoriesList";
import Product from "../Components/Product/Product";
import * as actionTypes from "../store/actions/actionTypes";

const HomeScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);

  const dispatch = useDispatch();
  const loadInitialDoc = async () => {
    setRefreshing(true);
    let first = Firebase.firestore()
      .collection("Product")
      .orderBy("timeStamp")
      .limit(10);
    let paginate = await first.get().then((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      const last = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(last);
      setData(data);
      setRefreshing(false);
    });
  };
  useEffect(() => {
    dispatch(actionTypes.fetchUser());
    loadInitialDoc();
  }, []);

  const searchTextChangeHandler = (text) => {
    setSearchText(text);
    Firebase.firestore()
      .collection("Product")
      .orderBy("data.title")
      .startAt(text)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setData(data);
        console.log("updated", text);
      })
      .catch((err) => console.log(err.message));
  };

  const categoryClickHandler = (title) => {
    Firebase.firestore()
      .collection("Product")
      .where("data.category", "==", title)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setData(data);
        console.log("updated", title);
      })
      .catch((err) => console.log(err.message));
  };
  const productClickHandler = (item, imageUris, phoneNumber) => {
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

  const addPagesHandler = () => {
    if (lastDoc) {
      const db = Firebase.firestore()
        .collection("Product")
        .orderBy("timeStamp")
        .startAfter(lastDoc)
        .limit(10);
      db.get().then((querySnapshot) => {
        const docs = [...data];
        querySnapshot.forEach((doc) => {
          docs.push(doc.data());
        });
        const last = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDoc(last);
        setData(docs);
      });
    }
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
          ListFooterComponent={() => (
            <View style={{ width: "100%", height: 150 }}></View>
          )}
          numColumns={2}
          onEndReached={addPagesHandler}
          onEndReachedThreshold={0.7}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={loadInitialDoc}
            />
          }
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
