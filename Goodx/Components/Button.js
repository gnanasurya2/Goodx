import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.clicked}>
      <Text style={styles.text}>SUBMIT</Text>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    backgroundColor: "green",
    width: 120,
    alignSelf: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
});

export default Button;
