// Võ Minh Tài - 23521382
import { SplashScreen, Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { useAuthStore } from "@/stores/auth-store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  if (!hasHydrated) {
    return null;
  }

  SplashScreen.hide();

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
