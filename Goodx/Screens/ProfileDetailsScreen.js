import React from "react";

import { Text, View, StyleSheet } from "react-native";
const ProfileDetails = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text>ProfileDetails</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileDetails;
