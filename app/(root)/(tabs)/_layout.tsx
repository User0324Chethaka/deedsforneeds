import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="homeStack" options={{ headerShown: false }} />
      <Tabs.Screen name="chatStack" options={{ headerShown: false }} />
      <Tabs.Screen name="profileStack" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
