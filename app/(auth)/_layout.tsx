import { Stack } from "expo-router";
import { colors } from "@/constants";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="signIn"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.gray50,
          },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="createAccount"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.gray50,
          },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
    </Stack>
  );
};

export default Layout;
