import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="editProfile" options={{ headerShown: false }} />
      <Stack.Screen name="selectNewSkills" options={{ headerShown: false }} />
      <Stack.Screen name="logout" options={{ headerShown: false }} />
      <Stack.Screen name="deleteAccount" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
