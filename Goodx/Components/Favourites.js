import React from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentage } from "../helpers/responsiveness";

const Favourites = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Product:</Text>
          <Text style={styles.content}>{props.title}</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.content}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    width: widthPercentage(90),
    height: 120,
    alignSelf: "center",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: "row",
  },
  image: {
    width: widthPercentage(30),
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentWrapper: {
    flexDirection: "row",
    width: widthPercentage(35),
    marginBottom: 3,
  },
  content: {
    fontSize: 15,
  },
});

export default Favourites;
