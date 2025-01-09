import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { icons, colors } from "@/constants";

const ToggleCameraFacingButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className="flex justify-center items-center h-[6vh] w-[6vh] bg-gray-600 rounded-full"
    >
      <Image
        source={icons.toggleCamera}
        resizeMode="contain"
        tintColor={colors.gray50}
        className="h-[3vh] w-[3vh]"
      />
    </TouchableOpacity>
  );
};

export default ToggleCameraFacingButton;
