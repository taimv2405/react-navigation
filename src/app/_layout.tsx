// Võ Minh Tài - 23521382
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { useAuthStore } from "@/stores/auth-store";

export default function RootLayout() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

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
