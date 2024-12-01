import React, { useState } from "react";
import { Link } from "expo-router";
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors, fontSizes, icons } from "@/constants";
import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView className={`flex bg-gray-50 h-full px-[5vw]`}>
      <StatusBar backgroundColor={colors.primaryBg} style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Text className="font-medium text-left mt-0 mb-[6vh] text-5xl">
              Welcome{"\n"}back
            </Text>
            {submitted ? (
              <ActivityIndicator color={colors.primary} size="large" />
            ) : (
              <View className="flex items-center h-full">
                <InputField
                  label="Email"
                  containerStyle="bg-gray-200 border-gray-200"
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
                <InputField
                  label="Password"
                  containerStyle="bg-gray-200 border-gray-200 mb-[6vh]"
                  placeholder="Enter password"
                  passwordEntry={true}
                  secureTextEntry={secureTextEntry}
                  onPressSecureTextEntry={() =>
                    setSecureTextEntry((previousVal) => !previousVal)
                  }
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  // keyboardType="password"
                  autoCapitalize="none"
                  Icon={() => (
                    <Image
                      source={icons.lock}
                      className="h-[2.8vh] w-[2.8vh] ml-[4vw]"
                      resizeMode="contain"
                      tintColor={colors.gray600}
                    />
                  )}
                />
                <CustomButton
                  title="Sign In"
                  className="bg-primary-500"
                  textClassName="text-primary-50"
                  disabled={submitted} // submitted is set to true when button pressed
                />
                <View className="flex-row items-center">
                  {/* Separator (or) */}
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
                  title="Sign in with Google"
                  className="bg-gray-200 mb-[4vh]"
                  textClassName="text-black"
                  disabled={submitted} // submitted is set to true when button pressed
                  IconLeft={() => (
                    <Image
                      source={icons.google}
                      className="h-[2.8vh] mr-[2vw]"
                      resizeMode="contain"
                    />
                  )}
                />
                <Link
                  href="/(auth)/signUp"
                  className="text-center font-regular text-base"
                >
                  <Text>
                    Don't have an account?{" "}
                    <Text className="text-primary-500 underline font-bold">
                      Sign Up
                    </Text>
                  </Text>
                </Link>
              </View>
            )}
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
