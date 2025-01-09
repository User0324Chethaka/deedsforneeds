import React, { useState } from "react";
import { TouchableOpacity, Image, Alert, View, Text } from "react-native";
import { Camera } from "expo-camera";
import OnboardingView from "@/components/onboardingView";
import CustomButton from "@/components/customButton";
import CameraComponent from "@/components/cameraComponent";
import { icons, colors } from "@/constants";

const GetProfilePicture = () => {
  const [submitted, setSubmitted] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [image, setImage] = useState("");

  const handleProfilePictureSubmit = () => {
    console.log("Hello");
  };

  const takePicture = async () => {
    const currentPermission = await Camera.getCameraPermissionsAsync();
    if (currentPermission.status !== "granted") {
      const updatedPermission = await Camera.requestCameraPermissionsAsync();
      if (updatedPermission.status === "granted") setCameraVisible(true);
    } else {
      setCameraVisible(true);
    }
  };

  const handleImagePress = () => {
    Alert.alert(
      "Choose Image Source",
      "Select the source for your image",
      [
        {
          text: "Open Camera",
          onPress: () => takePicture(),
        },
        {
          text: "Choose from Device",
          onPress: () => console.log("Image library pressed"),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <OnboardingView
      title={"Select\nProfile Picture"}
      submitted={submitted}
      onPress={() => handleProfilePictureSubmit()}
    >
      {!image ? (
        <TouchableOpacity
          className="flex justify-center items-center h-[15vh] w-[15vh] bg-gray-200 rounded-full mt-[20vh] border-[0.3vh] border-gray-600"
          onPress={() => handleImagePress()}
        >
          <Image
            source={icons.camera}
            tintColor={colors.gray600}
            className="h-[8vh] w-[8vh]"
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View className="flex items-center h-[53vh] pt-[2vh]">
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            className="h-[37vh] w-[37vh] rounded-[1vh] bg-gray-200" // bg-gray-200 added to act as an indicator while image load
          />
          <View className="flex-row justify-between w-full mt-[5vh]">
            <CustomButton
              title="Retake"
              className="bg-gray-200 w-[42vw]"
              textClassName="text-gray-600"
              onPress={() => takePicture()}
            />
            <CustomButton
              title="Cancel"
              className="bg-gray-200 w-[42vw]"
              textClassName="text-gray-600"
            />
          </View>
        </View>
      )}
      <CameraComponent
        cameraVisible={cameraVisible}
        setCameraVisible={setCameraVisible}
        setImage={setImage}
      />
    </OnboardingView>
  );
};

export default GetProfilePicture;
