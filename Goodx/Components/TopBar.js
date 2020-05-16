import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const TopBar = (props) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.text}>{props.title ? props.title : "Goodx"}</Text>
    </View>
  );
};
const styles = new StyleSheet.create({
  topBar: {
    paddingTop: 35,
    paddingBottom: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default TopBar;
