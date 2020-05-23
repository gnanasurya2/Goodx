import React, { useState, useRef, useEffect } from "react";

import { Text, View, StyleSheet, TextInput, Modal } from "react-native";
import Colors from "../constants/colors";
import Button from "../Components/Button";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useDispatch } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import * as firebase from "firebase";
import Firebase from "../constants/firebase";

const PhoneNumberAuth = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  const recaptchaVerifier = useRef(null);

  const dispatch = useDispatch();

  const phoneAuthHandler = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verification = await phoneProvider.verifyPhoneNumber(
      "+91" + phoneNumber,
      recaptchaVerifier.current
    );
    setVerificationId(verification);
    setShowModal(true);
  };

  const codeVerifyHandler = async () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    await firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        console.log("successful");
        const doc = Firebase.firestore()
          .collection("user")
          .doc(props.route.params.email);
        doc
          .set({
            phoneNumber: phoneNumber,
          })
          .then(() => {
            props.navigation.navigate("Main", {
              screen: "Home",
            });
          });
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <View style={styles.wrapper}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={{
          apiKey: "AIzaSyDJYo-vJoD65bXfx2OrEaTQWuC3fHG8op0",
          authDomain: "goodx-4d561.firebaseapp.com",
          databaseURL: "https://goodx-4d561.firebaseio.com",
          projectId: "goodx-4d561",
          storageBucket: "goodx-4d561.appspot.com",
          messagingSenderId: "680364883839",
          appId: "1:680364883839:web:56bc901170ba1f3ab1e44a",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Verify your phone number</Text>
        <Text style={styles.subText}>
          We will send OTP to your phone number for verification.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Enter phone number</Text>
        <View style={styles.inputWrapper}>
          <View>
            <Text style={styles.numberText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            autoCompleteType="tel"
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>
      <Button
        title="Verify"
        clicked={phoneAuthHandler}
        style={{ marginTop: 50 }}
      />
      <Modal visible={showModal} transparent>
        <View style={styles.modal}>
          <View style={styles.innerModal}>
            <Text style={[styles.text, { color: "black" }]}>
              Enter the verification code
            </Text>
            <TextInput
              style={styles.codeInput}
              keyboardType="number-pad"
              onChangeText={(text) => setCode(text)}
            />
            <Button
              style={{ marginTop: 20 }}
              title="Confirm"
              clicked={codeVerifyHandler}
            />
          </View>
        </View>
      </Modal>
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
  container: {
    width: "80%",
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subText: {
    fontSize: 18,
    marginTop: 15,
    color: "lightgrey",
  },
  inputWrapper: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "white",
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: "white",
    flex: 1,
  },
  numberText: {
    fontSize: 16,
    color: "white",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 12,
  },
  codeInput: {
    padding: 10,
    borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default PhoneNumberAuth;
