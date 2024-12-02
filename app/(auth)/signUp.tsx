import React, { useState } from "react";
import { useRouter, Link } from "expo-router";
import {
  Keyboard,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { colors, fontSizes, icons } from "@/constants";
import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleEmailSubmit = () => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubmitted(true);
      router.push({
        pathname: "/(auth)/createAccount",
        params: { email },
      });
      setSubmitted(false);
    } else {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address to continue."
      );
    }
  };

  return (
    <SafeAreaView className={`flex bg-gray-50 h-full px-[5vw]`}>
      <StatusBar backgroundColor={colors.gray50} style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <Text className="font-medium text-left mt-0 mb-[12vh] text-5xl">
              What's your{"\n"}Email
            </Text>
            {submitted ? (
              <ActivityIndicator color={colors.primary} size="large" />
            ) : (
              <View className="flex items-center h-full">
                <InputField
                  label=""
                  containerStyle="bg-gray-200 border-gray-200 mb-[13vh]"
                  placeholder="Enter email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  Icon={() => (
                    <Image
                      source={icons.mail}
                      className="h-[2.8vh] w-[2.8vh] ml-[4vw]"
                      resizeMode="contain"
                      tintColor={colors.gray600}
                    />
                  )}
                />
                <CustomButton
                  title="Continue"
                  className="bg-primary-500"
                  textClassName="text-primary-50"
                  disabled={submitted}
                  onPress={() => handleEmailSubmit()}
                />
                <View className="flex-row items-center">
                  <View className="flex-1 h-px bg-gray-300" />
                  <Text
                    className="mx-[4vw] text-gray-600  my-[3vh]"
                    style={{ fontSize: fontSizes.base }}
                  >
                    Or
                  </Text>
                  <View className="flex-1 h-px bg-gray-300" />
                </View>
                <CustomButton
                  title="Sign up with Google"
                  className="bg-gray-200 mb-[4vh]"
                  textClassName="text-black"
                  disabled={submitted}
                  IconLeft={() => (
                    <Image
                      source={icons.google}
                      className="h-[2.8vh] mr-[2vw]"
                      resizeMode="contain"
                    />
                  )}
                />
                <Link
                  href="/(auth)/signIn"
                  className="text-center font-regular text-base"
                >
                  <Text>
                    Already have an account?{" "}
                    <Text className="text-primary-500 underline font-bold">
                      Sign In
                    </Text>
                  </Text>
                </Link>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
