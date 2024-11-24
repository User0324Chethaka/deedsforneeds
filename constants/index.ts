import { Dimensions } from "react-native";
import { scaleByWidth } from "@/utils/dimensions";

const { width, height, fontScale } = Dimensions.get("window");

export const dimensions = {
  ww: width,
  wh: height,
  diameter: Math.sqrt(width ** 2 + height ** 2),
};

const baseFontSize: number = scaleByWidth(0.02) * fontScale;

export const fontSizes = {
  sm: `${baseFontSize * 0.8}px`,
  base: `${baseFontSize}px`,
  xl: `${baseFontSize * 1.25}px`,
  "2xl": `${baseFontSize * 1.563}px`,
  "3xl": `${baseFontSize * 1.953}px`,
  "4xl": `${baseFontSize * 2.441}px`,
  "5xl": `${baseFontSize * 3.052}px`,
};
