import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { icons, colors } from "@/constants";

const CameraButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className="flex justify-center items-center h-[8vh] w-[8vh] bg-gray-50 rounded-full"
    >
      <Image
        source={icons.camera}
        resizeMode="contain"
        tintColor={colors.gray600}
        className="h-[4vh] w-[4vh]"
      />
    </TouchableOpacity>
  );
};

export default CameraButton;
