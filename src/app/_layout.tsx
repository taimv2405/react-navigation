// Võ Minh Tài - 23521382
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { useAuthStore } from "@/stores/auth-store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated) {
      SplashScreen.hide();
    }
  }, [hasHydrated]);

  return (
    <KeyboardProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!isSignedIn}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
        <Stack.Protected guard={isSignedIn}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
      </Stack>
    </KeyboardProvider>
  );
}
