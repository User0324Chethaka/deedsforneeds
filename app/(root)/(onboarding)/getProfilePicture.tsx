import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import OnboardingView from "@/components/onboardingView";
import { icons, colors } from "@/constants";

const GetProfilePicture = () => {
  const [profilePicture, getProfilePicture] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleProfilePictureSubmit = () => {
    console.log("Hello");
  };

  const handleProfilePictureSelect = () => {
    console.log("Hello2");
  };

  return (
    <OnboardingView
      title={"Select\nProfile Picture"}
      submitted={submitted}
      onPress={() => handleProfilePictureSubmit()}
    >
      {!profilePicture ? (
        <TouchableOpacity
          className="flex justify-center items-center h-[15vh] w-[15vh] bg-gray-200 rounded-full mt-[20vh] border-[0.3vh] border-gray-600"
          onPress={() => handleProfilePictureSelect()}
        >
          <Image
            source={icons.camera}
            tintColor={colors.gray600}
            className="h-[8vh] w-[8vh]"
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </OnboardingView>
  );
};

export default GetProfilePicture;
