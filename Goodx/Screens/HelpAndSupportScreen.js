import React from "react";

import { Text, View, StyleSheet } from "react-native";
const HelpAndSupport = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text>HelpAndSupport</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HelpAndSupport;
