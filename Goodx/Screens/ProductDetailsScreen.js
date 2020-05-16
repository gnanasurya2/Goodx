import React from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TopBar from "../Components/TopBar";
import Colors from "../constants/colors";
import * as Linking from "expo-linking";
import Carousel from "../Components/Carousel";

const ProductDetails = (props) => {
  const chatPressHandler = () => {
    Linking.openURL("whatsapp://send?phone=919755890610");
  };

  return (
    <View
      contentContainerStyle={{ alignItems: "center" }}
      style={styles.wrapper}
    >
      <TopBar />
      <View style={{ height: "30%" }}>
        <Carousel
          images={[
            "https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg",
          ]}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.amountText}>₹ {props.route.params.price}</Text>
        <Text style={styles.titleText}>
          Harry potter and the prisoner of Azkaban
        </Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.amountText}>Details:</Text>
          <Text style={styles.titleText}>{props.route.params.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={chatPressHandler}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = new StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  card: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 3,
    marginBottom: 7,
  },
  amountText: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    padding: 10,
    paddingTop: 0,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetails;
