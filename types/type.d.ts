import { ReactNode } from "react";
import { TouchableOpacityProps, TextInputProps } from "react-native";

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
  textClassName?: string;
}

declare interface ToggleSecureEntryProps extends TouchableOpacityProps {
  secureTextEntry: boolean;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  Icon?: React.ComponentType<any>;
  secureTextEntry?: boolean;
  onPressSecureTextEntry?: () => void;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  passwordEntry?: boolean;
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

// interface WindowPaddingTypes {
//   vertical: number;
//   horizontal: number;
// }

interface ColorsTypes {
  primary: string;
  gray50?: string;
  secondaryBg?: string;
  gray600?: string;
}

interface OnboardingViewProps {
  title?: string;
  buttonTitle?: string;
  submitted?: boolean;
  children?: ReactNode;
  onPress: () => void;
}

interface CameraProps {
  // image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  cameraVisible: boolean;
  setCameraVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToggleFlashButtonProps extends TouchableOpacityProps {
  flashMode: "off" | "on" | "auto"; // Define the expected values for flashMode
}
