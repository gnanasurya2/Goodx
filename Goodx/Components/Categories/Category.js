import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Category = (props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={{
          backgroundColor: props.backgroundColor,
          ...styles.iconWrapper,
        }}
        onPress={props.clicked}
      >
        <MaterialCommunityIcons name={props.iconName} size={35} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: "33%",
    marginVertical: 10,
  },
  iconWrapper: {
    padding: 15,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Category;
