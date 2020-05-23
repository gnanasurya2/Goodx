import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";
import Button from "../Components/Button";
import Firebase from "../constants/firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const user = Firebase.auth().currentUser;
    console.log(user);
    if (user) {
      props.navigation.navigate("Login");
    }
  }, []);
  const loginClickHandler = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        props.navigation.navigate("Main", {
          screen: "Home",
        });
      })
      .catch((err) => {
        Alert.alert("Error", err.message, [{ text: "okay" }]);
      });
  };

  const signupClickHandler = () => {
    console.log("inside");
    props.navigation.navigate("SignUp");
  };
  return (
    <View style={styles.wrapper}>
      <Image source={require("../assets/icon.png")} />
      <Text style={styles.text}>Enter your email Id</Text>
      <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} />
      <Text style={styles.text}>Enter your password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" clicked={loginClickHandler} />
      <Text style={styles.signupText}>Don't have a account?</Text>
      <TouchableWithoutFeedback onPress={signupClickHandler}>
        <Text style={styles.clickable}>Signup</Text>
      </TouchableWithoutFeedback>
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
  input: {
    fontSize: 18,
    width: "80%",
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 2,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 18,
    width: "80%",
    marginTop: 20,
  },
  signupText: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
  clickable: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
});

export default Login;
