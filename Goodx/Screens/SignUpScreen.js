import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, Alert } from "react-native";

import Colors from "../constants/colors";
import Button from "../Components/Button";
import Firebase from "../constants/firebase";

const SignUpScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");

  const signUpHandler = () => {
    if (password.length < 6) {
      Alert.alert("Password should be atleast 6 characters", "", [
        { text: "okay" },
      ]);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match", "", [{ text: "okay" }]);
      return;
    }
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate("PhoneNumber", {
          username: userName,
          email: email,
        });
      })
      .catch((err) => Alert.alert(err.message, "", [{ text: "okay" }]));
  };

  return (
    <View style={styles.wrapper}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        autoCompleteType="off"
        onChangeText={(text) => {
          setUserName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        autoCompleteType="off"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
        onFocus={() => console.log("focus")}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your Password"
        secureTextEntry
        onChangeText={(text) => {
          setConfimPassword(text);
        }}
      />
      <Button title="Sign up" clicked={signUpHandler} />
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    marginBottom: 50,
  },
  input: {
    fontSize: 18,
    width: "80%",
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
  },
});

export default SignUpScreen;
