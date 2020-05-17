import React, { useEffect, useState } from "react";

import { Text, ScrollView, StyleSheet, Alert } from "react-native";

import TopBar from "../Components/TopBar";
import DetailsInput from "../Components/DetailsInput";
import Button from "../Components/Button";

const AddDetailsScreen = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitButtonHandler = () => {
    if (title === "") {
      Alert.alert("Enter a title", "", [{ text: "okay" }]);
      return;
    }
    if (price === "") {
      Alert.alert("Enter a price", ""[{ text: "okay" }]);
      return;
    }
    if (description === "") {
      Alert.alert("Enter a description", "", [{ text: "okay" }]);
      return;
    }
    props.navigation.navigate("AddImages", {
      title: title,
      description: description,
      price: price,
    });
  };
  return (
    <ScrollView style={styles.wrapper}>
      <TopBar title={props.route.params.title} />
      <Text style={styles.titleText}>Add Details</Text>
      <DetailsInput
        title="Title"
        keyboard="default"
        suggestion="Mention key features like Brand,model,type"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <DetailsInput
        title="Price"
        keyboard="numeric"
        suggestion="Mention the expected price for the product"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <DetailsInput
        title="Describe what you are selling"
        keyboard="default"
        suggestion="Includes conditions,features & reason for selling"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button clicked={submitButtonHandler} />
    </ScrollView>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: "5%",
  },
});

export default AddDetailsScreen;
