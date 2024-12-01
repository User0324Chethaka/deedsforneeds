import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import { colors, images } from "@/constants";
import CustomButton from "@/components/customButton";

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex items-center bg-primary-500 h-full pt-[5vh]">
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Image
        source={images.welcome}
        resizeMode="contain"
        className="h-[40vh]"
      />
      <Image
        source={images.logoLight}
        resizeMode="contain"
        className="w-[80vw]"
      />
      <View className="w-[80vw] mt-[3vh]">
        <CustomButton
          title="Create an Account"
          className="mb-[3vh] bg-primary-50"
          textClassName="text-primary-500"
          onPress={() => router.push("/(auth)/signUp")}
        />
        <CustomButton
          title="Sign In"
          className="bg-transparent border-[0.3vh] border-primary-50"
          textClassName="text-primary-50"
          onPress={() => router.push("/(auth)/signIn")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
