import React, { useState } from "react";
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import auth from "@react-native-firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors, icons } from "@/constants";
import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";

const CreateAccount = () => {
  const { email } = useLocalSearchParams();
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [passwordConditions, setPasswordConditions] = useState({
    hasUppercase: false,
    hasSpecialChar: false,
    isLengthValid: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const validEmail = Array.isArray(email) ? email[0] : email;

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    setPasswordConditions({
      hasUppercase: /[A-Z]/.test(text),
      hasSpecialChar: /[!@#$%^&*]/.test(text),
      isLengthValid: text.length >= 8,
    });
  };

  const handleCrateAccount = async () => {
    setSubmitted(true);
    try {
      await auth().createUserWithEmailAndPassword(validEmail, password);
      Alert.alert("Success", "Account created successfully!");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/email-already-in-use")) {
          Alert.alert("Error", "The email address is already in use!");
        } else if (error.message.includes("auth/invalid-email")) {
          Alert.alert("Error", "The email address is invalid");
        } else {
          Alert.alert("Error", error.message);
        }
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    }
    setSubmitted(false);
  };

  return (
    <SafeAreaView className={`flex bg-gray-50 h-full px-[5vw]`}>
      <StatusBar backgroundColor={colors.primaryBg} style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Text className="font-medium text-left mt-0 mb-[12vh] text-5xl">
              Enter{"\n"}password
            </Text>
            {submitted ? (
              <ActivityIndicator color={colors.primary} size="large" />
            ) : (
              <View className="flex items-center h-full">
                <InputField
                  label=""
                  containerStyle="bg-gray-200 border-gray-200"
                  placeholder="Enter password"
                  passwordEntry={true}
                  secureTextEntry={secureTextEntry}
                  onPressSecureTextEntry={() =>
                    setSecureTextEntry((previousVal) => !previousVal)
                  }
                  value={password}
                  keyboardType="default"
                  onChangeText={(text) => handlePasswordChange(text)}
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
                <View className="mt-[4vh] mb-[16vh]">
                  <Text className="text-base text-gray-600">
                    {passwordConditions.hasUppercase ? "✓" : "○"} Contains
                    uppercase letter
                  </Text>
                  <Text className="text-base text-gray-600">
                    {passwordConditions.hasSpecialChar ? "✓" : "○"} Contains
                    special character
                  </Text>
                  <Text className="text-base text-gray-600">
                    {passwordConditions.isLengthValid ? "✓" : "○"} Minimum 8
                    characters
                  </Text>
                </View>
                <CustomButton
                  title="Create an Account"
                  className="bg-primary-500"
                  textClassName="text-primary-50"
                  disabled={submitted}
                  onPress={() => handleCrateAccount()}
                />
              </View>
            )}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateAccount;
