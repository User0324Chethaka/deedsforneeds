import { Dimensions } from "react-native";
import welcome from "@/assets/images/welcome.webp";
import logoLight from "@/assets/images/logo-light.png";
import logoBlue from "@/assets/images/logo-blue.png";
import google from "@/assets/icons/google.png";
import visibility from "@/assets/icons/visibility.png";
import visibilityOff from "@/assets/icons/visibility_off.png";
import mail from "@/assets/icons/mail.png";
import lock from "@/assets/icons/lock.png";

import {
  FontSizeTypes,
  // DimensionTypes,
  // WindowPaddingTypes,
  ColorsTypes,
} from "@/types/type";

const { width, height, fontScale } = Dimensions.get("window");
const baseFontSize: number = width * 0.041 * fontScale;

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
  logoLight: logoLight,
  logoBlue: logoBlue,
};

export const icons = {
  google: google,
  visibility: visibility,
  visibilityOff: visibilityOff,
  mail: mail,
  lock: lock,
};

export const colors: ColorsTypes = {
  primary: "#0836af",
  gray50: "#f9fafb",
  gray600: "#4b5563",
};
