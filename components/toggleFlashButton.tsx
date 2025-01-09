import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { icons, colors } from "@/constants";
import { ToggleFlashButtonProps } from "@/types/type";

const ToggleFlashButton = ({ flashMode, ...props }: ToggleFlashButtonProps) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center bg-gray-50 rounded-full h-[5vh] w-[5vh]"
      {...props}
    >
      {flashMode === "off" ? (
        <Image
          source={icons.flashOff}
          tintColor={colors.gray600}
          className="h-[3vh]"
          resizeMode="contain"
        />
      ) : (
        <Image
          source={icons.flash}
          tintColor={colors.gray600}
          className="h-[3vh]"
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default ToggleFlashButton;
