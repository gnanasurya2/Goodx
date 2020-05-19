import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
const Carousel = (props) => {
  const [interval, setInterval] = useState(0);
  const [active, setActive] = useState([]);

  useEffect(() => {
    const activeArray = [...active].map((_, index) => index === interval);
    setActive(activeArray);
  }, [interval]);

  useEffect(() => {
    let activeArray = props.images.map((_, index) => false);
    activeArray[0] = true;
    setActive(activeArray);
  }, []);

  const getInterval = (data) => {
    const int = Math.round(
      data.nativeEvent.contentOffset.x / Dimensions.get("window").width
    );
    if (int !== interval) {
      setInterval(int);
    }
  };

  return (
    <>
      <ScrollView
        style={styles.imageWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(data) => getInterval(data)}
        scrollEventThrottle={500}
      >
        {props.images.map((image, index) => (
          <Image style={styles.image} source={image} key={index} />
        ))}
      </ScrollView>
      <View style={styles.stats}>
        {active.map((ele, index) => (
          <View
            style={{ ...styles.stat, opacity: ele ? 1 : 0.5 }}
            key={index}
          ></View>
        ))}
      </View>
    </>
  );
};

const styles = new StyleSheet.create({
  imageWrapper: {
    width: "95%",
  },
  image: {
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: "100%",
    marginVertical: 10,
  },
  stats: {
    marginVertical: 5,
    alignSelf: "center",
    flexDirection: "row",
  },
  stat: {
    width: 10,
    height: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

Carousel.prototype = {
  images: PropTypes.array,
  active: PropTypes.number,
};

Carousel.defaultProps = {
  active: null,
};
export default Carousel;
