import { Stack } from "expo-router";
import { colors } from "@/constants";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="getName"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="getProfilePicture"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="getLocation"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="getSellingServices"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="getBuyingServices"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name="confirmProfile"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.gray50 },
          headerShadowVisible: false,
          headerTintColor: colors.primary,
        }}
      />
    </Stack>
  );
};

export default Layout;
