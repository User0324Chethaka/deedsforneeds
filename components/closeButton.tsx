import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { icons, colors } from "@/constants";

const CloseButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center bg-gray-50 rounded-full h-[5vh] w-[5vh]"
      {...props}
    >
      <Image
        source={icons.close}
        tintColor={colors.gray600}
        className="h-[3vh]"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default CloseButton;
