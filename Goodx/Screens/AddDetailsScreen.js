import React, { useEffect, useState } from "react";

import { Text, View, StyleSheet } from "react-native";

import TopBar from "../Components/TopBar";
import DetailsInput from "../Components/DetailsInput";
import Button from "../Components/Button";

const AddDetailsScreen = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitButtonHandler = () => {
    props.navigation.navigate("AddImages");
  };
  return (
    <View style={styles.wrapper}>
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
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: "5%",
  },
});

export default AddDetailsScreen;
