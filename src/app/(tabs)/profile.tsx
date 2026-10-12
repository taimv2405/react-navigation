import { Button } from "react-native";

import { ScreenTitle } from "@/components/screen-title";
import { useAuthStore } from "@/stores/auth-store";

export default function ProfileScreen() {
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <ScreenTitle title="Profile Screen">
      <Button title="LOG OUT" onPress={signOut} />
    </ScreenTitle>
  );
}
