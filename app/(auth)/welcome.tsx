import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View } from "react-native";
import CustomButton from "@/components/customButton";

import { images } from "@/constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex items-center bg-main h-full pt-[10vh]">
      <Image
        source={images.welcome}
        resizeMode="contain"
        className="h-[40vh]"
      />
      <Image
        source={images.logoWhite}
        resizeMode="contain"
        className="w-[80vw]"
      />
      <View className="w-[80vw]">
        <CustomButton
          title="Create an Account"
          bgVariant="secondary"
          textVariant="theme"
          className="mb-[3vh]"
          onPress={() => router.push("/(auth)/signUp")}
        />
        <CustomButton
          title="Sign In"
          bgVariant="outline"
          textVariant="default"
          onPress={() => router.push("/(auth)/signIn")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
