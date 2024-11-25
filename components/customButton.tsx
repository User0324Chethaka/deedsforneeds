import { TouchableOpacity, Text } from "react-native";
import { fontSizes } from "@/constants";
import { ButtonProps } from "@/types/type";
import getBgVariantStyle from "@/utils/getBgVariantStyle";
import getTextVariantStyle from "@/utils/getTextVariantStyle";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-[3vw] flex flex-row justify-center items-center ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`font-medium ${getTextVariantStyle(textVariant)}`}
        style={{ fontSize: fontSizes.xl }}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
