import React, { useEffect } from "react";

import { FlatList, View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TopBar from "../Components/TopBar";
import Favourites from "../Components/Favourites";
import * as ActionTypes from "../store/actions/actionTypes";
import Firebase from "../constants/firebase";

const AdsScreen = (props) => {
  const data = useSelector((state) => state.products.myProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionTypes.fetchProducts("Myproducts"));
  }, []);

  const productClickHandler = async (item) => {
    console.log(item.timeStamp);
    await Firebase.firestore()
      .collection("Product")
      .where("timeStamp", "==", item.timeStamp)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
      });
    console.log("finished");
  };

  const deleteProductHandler = (item) => {
    console.log(item);
    Alert.alert(
      "Are you sure you want to delete the product",
      `Name:${item.title}\nDescription:${item.description}`,
      [
        {
          text: "delete",
          onPress: () => {
            Firebase.firestore()
              .collection("Product")
              .where("timeStamp", "==", item.timeStamp)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  doc.data().images.map((img) => {
                    const ref = Firebase.storage().refFromURL(img);
                    ref
                      .delete()
                      .then(() => console.log("image deleted"))
                      .catch((err) => console.log(err.message));
                  });
                  doc.ref.delete();
                  dispatch(
                    ActionTypes.deleteProducts(
                      item.title,
                      item.description,
                      "Myproducts"
                    )
                  );
                });
              })
              .catch(() => console.log("failure"));
          },
          style: "cancel",
        },
        { text: "cancel", onPress: () => console.log("cancel") },
      ]
    );
  };
  return (
    <View>
      <TopBar title="My products" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Favourites
            title={item.title}
            description={item.description}
            clicked={() => productClickHandler(item)}
            delete
            deleteClicked={() => deleteProductHandler(item)}
          />
        )}
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default AdsScreen;
