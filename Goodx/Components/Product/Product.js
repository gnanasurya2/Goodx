import React, { useState } from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Product = (props) => {
  const [iconName, setIconName] = useState("heart-outline");
  const [iconColor, setIconColor] = useState("grey");

  const description =
    props.description.length > 20
      ? props.description.slice(0, 20) + "..."
      : props.description;
  const favouritesClickHandler = () => {
    if (iconName === "heart-outline") {
      setIconName("heart");
      setIconColor("#CD2B2A");
    } else {
      setIconName("heart-outline");
      setIconColor("grey");
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
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg",
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
