import { TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?:
    | "primary"
    | "default"
    | "theme"
    | "secondary"
    | "danger"
    | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

interface FontSizeTypes {
  sm: number;
  base: number;
  xl: number;
  "2xl": number;
  "3xl": number;
  "4xl": number;
  "5xl": number;
}

interface DimensionTypes {
  ww: number;
  wh: number;
  diameter: number;
}

interface WindowPaddingTypes {
  vertical: number;
  horizontal: number;
}
