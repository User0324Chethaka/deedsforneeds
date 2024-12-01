import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  title,
  IconLeft,
  IconRight,
  className,
  textClassName,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-full p-[3vw] flex flex-row justify-center items-center  ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`font-medium ${textClassName} text-xl`}>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
