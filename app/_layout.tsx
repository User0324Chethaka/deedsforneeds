import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null | undefined>(); // Allow undefined and null
  const [initializing, setInitializing] = useState(true);
  const [loaded, error] = useFonts({
    "Roboto-Thin": require("@/assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Thin-Italic": require("@/assets/fonts/Roboto-ThinItalic.ttf"),
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Light-Italic": require("@/assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Italic": require("@/assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Medium-Italic": require("@/assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold-Italic": require("@/assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Black": require("@/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Black-Italic": require("@/assets/fonts/Roboto-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return subscriber;
  });

  if (!loaded && !error && initializing) return null;

  return (
    <Stack>
      {user ? (
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default RootLayout;
