import React from "react";

import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import TopBar from "../Components/TopBar";

const ProfileScreen = (props) => {
  return (
    <View style={styles.wrapper}>
      <TopBar title="Profile" />
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate("ProfileDetails")}
      >
        <View style={styles.profile}>
          <MaterialCommunityIcons
            name="account"
            size={45}
            style={styles.icon}
          />
          <Text style={styles.profileName}>Gnanasurya</Text>
          <Entypo name="triangle-right" size={35} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate("Faq")}
      >
        <View style={styles.profile}>
          <MaterialCommunityIcons
            name="chat-processing"
            size={45}
            style={styles.icon}
          />
          <Text style={styles.profileName}>Help and Support</Text>
          <Entypo name="triangle-right" size={35} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  profile: {
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    borderWidth: 2,
    borderRadius: 30,
    alignSelf: "center",
  },
  profileName: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "bold",
    width: "80%",
  },
});

export default ProfileScreen;
