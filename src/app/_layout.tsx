import { Stack } from "expo-router";

import { useAuthStore } from "@/stores/auth-store";

export default function RootLayout() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
    </Stack>
  );
}
