import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Image, Alert } from "react-native";
import OnboardingView from "@/components/onboardingView";
import InputField from "@/components/inputField";
import { icons, colors } from "@/constants";

const GetName = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleNameSubmit = () => {
    setSubmitted(true);
    if (!name || name.length < 3 || name.length > 20) {
      Alert.alert(
        "Invalid Name",
        "Please enter a name between 3 and 20 characters"
      );
    } else {
      console.log(name);
      router.push({ pathname: "/(root)/(onboarding)/getProfilePicture" });
    }
    setSubmitted(false);
  };

  return (
    <OnboardingView
      title={`Enter your\nname`}
      submitted={submitted}
      onPress={() => handleNameSubmit()}
    >
      <InputField
        label=""
        containerStyle="bg-gray-200 border-gray-200 mt-[8vh]"
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
        keyboardType="default"
        Icon={() => (
          <Image
            source={icons.person}
            className="h-[2.8vh] w-[2.8vh] ml-[4vw]"
            resizeMode="contain"
            tintColor={colors.gray600}
          />
        )}
      />
    </OnboardingView>
  );
};

export default GetName;
