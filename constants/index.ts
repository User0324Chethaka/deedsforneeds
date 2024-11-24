import { Dimensions } from "react-native";
import welcome from "@/assets/images/welcome.webp";

import { FontSizeTypes, DimensionTypes } from "@/types/type";

const { width, height, fontScale } = Dimensions.get("window");
const baseFontSize: number = width * 0.035 * fontScale;

export const dimensions: DimensionTypes = {
  ww: width,
  wh: height,
  diameter: Math.sqrt(width ** 2 + height ** 2),
};

export const fontSizes: FontSizeTypes = {
  sm: baseFontSize * 0.8,
  base: baseFontSize,
  xl: baseFontSize * 1.25,
  "2xl": baseFontSize * 1.563,
  "3xl": baseFontSize * 1.953,
  "4xl": baseFontSize * 2.441,
  "5xl": baseFontSize * 3.052,
};

export const images = {
  welcome: welcome,
};
