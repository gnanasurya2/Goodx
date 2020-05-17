import React from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";
import { heightPercentage } from "../helpers/responsiveness";

const DetailsInput = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>{props.title}*</Text>
      <TextInput
        style={styles.titleInput}
        keyboardType={props.keyboard}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <Text style={styles.commentText}>({props.suggestion})</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    width: "90%",
    alignSelf: "center",
    marginTop: heightPercentage(2),
    marginBottom: 50,
  },
  titleText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "800",
  },
  titleInput: {
    width: "100%",
    borderBottomWidth: 1.5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 10,
  },
  commentText: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 8,
  },
});

export default DetailsInput;
