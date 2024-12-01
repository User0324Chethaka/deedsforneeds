import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import { InputFieldProps } from "@/types/type";
import { icons, colors } from "@/constants";

const InputField = ({
  label,
  Icon,
  secureTextEntry = false,
  onPressSecureTextEntry,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  passwordEntry = false,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-medium mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row items-center relative rounded-full border ${containerStyle}`}
          >
            {Icon && <Icon />}
            <TextInput
              className={`rounded-full py-[2vh] px-[6vw] font-medium text-base flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
            {passwordEntry && (
              <TouchableOpacity
                onPress={onPressSecureTextEntry}
                className=" flex items-center justify-center bg-transparent rounded-full h-[6.3vh] w-[6.3vh] mr-[1vw]"
              >
                {secureTextEntry ? (
                  <Image
                    source={icons.visibilityOff}
                    tintColor={colors.gray600}
                    className="h-[3.5vh]"
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={icons.visibility}
                    tintColor={colors.gray600}
                    className="h-[3.5vh]"
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
