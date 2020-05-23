import React, { useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import Firebase from "firebase";
import "firebase/database";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { widthPercentage } from "../helpers/responsiveness";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../store/actions/actionTypes";

const ProductPosted = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fun = async () => {
      const dat = props.route.params.data;
      const email = Firebase.auth().currentUser.email;
      console.log(email);
      let phoneNumber;
      const data = await Firebase.firestore()
        .collection("user")
        .doc(email)
        .get()
        .then((data) => {
          phoneNumber = data.data().phoneNumber;
        });
      const time = new Date().getTime();
      dispatch(
        ActionTypes.addProducts(
          dat.category,
          dat.title,
          dat.description,
          dat.price,
          phoneNumber,
          time,
          "Myproducts"
        )
      );
      const doc = Firebase.firestore()
        .collection("Product")
        .add({
          ...props.route.params,
          timeStamp: time,
          phoneNumber: phoneNumber,
        })
        .then((data) => props.navigation.navigate("Sell"))
        .catch((err) => console.log(err));
      console.log(doc);
    };
    fun();
  }, []);
  return (
    <View style={styles.wrapper}>
      <MaterialCommunityIcons
        name="checkbox-marked-outline"
        size={widthPercentage(60)}
        color="white"
      />
      <Text style={styles.content}>
        Your producted has been posted successfully !
      </Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#4CBB17",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 25,
    textAlign: "center",
    width: "80%",
    fontWeight: "bold",
  },
});

export default ProductPosted;
