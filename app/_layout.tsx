import { Stack } from "expo-router";
import { useFonts } from "expo-font";

// Import your global CSS file
import "../global.css";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
