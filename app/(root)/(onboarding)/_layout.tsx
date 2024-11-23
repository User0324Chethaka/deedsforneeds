import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="getName" options={{ headerShown: false }} />
      <Stack.Screen name="getProfilePicture" options={{ headerShown: false }} />
      <Stack.Screen name="getLocation" options={{ headerShown: false }} />
      <Stack.Screen
        name="getSellingServices"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="getBuyingServices" options={{ headerShown: false }} />
      <Stack.Screen name="confirmProfile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
