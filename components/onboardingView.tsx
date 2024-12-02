import React from "react";
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors, dimensions } from "@/constants";
import CustomButton from "@/components/customButton";
import { OnboardingViewProps } from "@/types/type";

const OnboardingView = ({
  title,
  submitted,
  children,
  buttonTitle = "Continue",
  onPress,
}: OnboardingViewProps) => {
  return (
    <SafeAreaView className={`flex bg-gray-50 h-full px-[5vw]`}>
      <StatusBar backgroundColor={colors.gray50} style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Math.ceil(dimensions.wh * 0.07)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 relative">
            <Text className="font-medium text-left mt-0 text-5xl">{title}</Text>
            <View className="flex items-center">
              {submitted ? (
                <ActivityIndicator
                  color={colors.primary}
                  size="large"
                  className="mt-[10vh]"
                />
              ) : (
                children
              )}
            </View>
            <CustomButton
              title={buttonTitle}
              textClassName="text-primary-500"
              className="bg-primary-200 border-[0.3vh] border-primary-500 absolute bottom-[5vh]"
              onPress={() => onPress()}
              disabled={submitted} // submitted is set to true if submitted
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OnboardingView;
