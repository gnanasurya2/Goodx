import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.wrapper}>
      <MaterialCommunityIcons name="magnify" size={29} style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholder="What do you seek ?"
        value={props.searchText}
        onChangeText={props.onChange}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    width: "95%",
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
  },
  textInput: {
    fontSize: 18,
  },
  icon: {
    alignSelf: "center",
    paddingRight: 10,
  },
});

export default SearchBar;
