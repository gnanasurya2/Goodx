import { PixelRatio, Dimensions } from "react-native";

const widthPercentage = (width) => {
  let Screenwidth = Dimensions.get("window").width;
  return PixelRatio.roundToNearestPixel((Screenwidth * +width) / 100);
};

const heightPercentage = (height) => {
  let Screenheight = Dimensions.get("window").height;
  return PixelRatio.roundToNearestPixel((Screenheight * +height) / 100);
};

export { widthPercentage, heightPercentage };
