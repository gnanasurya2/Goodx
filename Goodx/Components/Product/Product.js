import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as actionTypes from "../../store/actions/actionTypes";

const Product = (props) => {
  const [iconName, setIconName] = useState("heart-outline");
  const [iconColor, setIconColor] = useState("grey");
  const dispatch = useDispatch();

  const description =
    props.description.length > 20
      ? props.description.slice(0, 20) + "..."
      : props.description;
  const favouritesClickHandler = () => {
    if (iconName === "heart-outline") {
      setIconName("heart");
      setIconColor("#CD2B2A");
      dispatch(
        actionTypes.addProducts(
          props.data.data.category,
          props.data.data.title,
          props.data.data.description,
          props.data.data.price,
          props.data.phoneNumber,
          props.data.timeStamp,
          "Favourites"
        )
      );
    } else {
      setIconName("heart-outline");
      setIconColor("grey");
      dispatch(
        actionTypes.deleteProducts(
          props.data.data.title,
          props.data.data.description,
          "Favourites"
        )
      );
    }
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.clicked}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={favouritesClickHandler}>
          <MaterialCommunityIcons name={iconName} size={25} color={iconColor} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />
      <Text style={styles.amountText}>
        ₹ {props.cost.toLocaleString("en-IN", { style: "currency" })}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    width: "45%",
    margin: "2.5%",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    resizeMode: "stretch",
    width: "90%",
    height: 150,
    marginVertical: 10,
  },
  amountText: {
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    paddingLeft: "5%",
    fontSize: 17,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 10,
  },
  icon: {
    position: "absolute",
    zIndex: 2,
    alignSelf: "flex-end",
    paddingRight: 7,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default Product;
