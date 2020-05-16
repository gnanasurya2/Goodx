import React, { useEffect, useState } from "react";

import { Text, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TopBar from "../Components/TopBar";
import Button from "../Components/Button";
import Carousel from "../Components/Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/colors";
import { widthPercentage, heightPercentage } from "../helpers/responsiveness";

const AddImagesScreen = (props) => {
  const [permission, setPermission] = useState("");
  const [imageUris, setImageUris] = useState([]);
  const displayImageHandler = (url) => {
    if (imageUris.length < 4) {
      const updatedUris = [...imageUris];
      updatedUris.push(url);
      setImageUris(updatedUris);
    }
  };
  const openCameraHandler = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync();
      displayImageHandler(result.uri);
    }
  };

  const openGalleryHandler = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
        allowsEditing: true,
      });
      displayImageHandler(result.uri);
    }
  };
  const addImageHandler = () => {
    props.navigation.navigate("ProductPosted");
  };
  return (
    <View style={styles.wrapper}>
      <TopBar title="Images" />
      <View style={{ height: heightPercentage(45) }}>
        <Carousel images={imageUris} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openCameraHandler}>
          <MaterialCommunityIcons name="camera" size={25} />
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, borderLeftWidth: 1, borderColor: "white" }}
          onPress={openGalleryHandler}
        >
          <MaterialCommunityIcons name="camera-burst" size={25} />
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.submitButton}>
        <Button clicked={addImageHandler} />
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: heightPercentage(40),
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 60,
  },
  button: {
    backgroundColor: Colors.primary,
    width: widthPercentage(50),
    alignItems: "center",
    paddingVertical: 7,
  },
  buttonText: {
    fontSize: 16,
  },
  submitButton: {
    marginTop: 60,
  },
});

export default AddImagesScreen;
