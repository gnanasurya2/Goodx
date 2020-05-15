import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const TopBar = (props) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.text}>GoodX</Text>
    </View>
  );
};
const styles = new StyleSheet.create({
  topBar: {
    marginTop: 30,
    height: 50,
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
