import React from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentage } from "../helpers/responsiveness";

const Favourites = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.clicked}>
      <Image source={require("../assets/initial.png")} style={styles.image} />
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
      {props.delete ? (
        <TouchableOpacity style={styles.delete} onPress={props.deleteClicked}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    width: widthPercentage(90),
    height: 120,
    alignSelf: "center",
    borderWidth: 2,
    // padding: 10,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  delete: {
    backgroundColor: "red",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: "100%",
  },
  deleteText: {
    alignSelf: "center",
    padding: 10,
    marginTop: "50%",
  },
});

export default Favourites;
