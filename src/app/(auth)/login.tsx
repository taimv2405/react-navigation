import { StyleSheet, View } from "react-native";

import { AuthLogo } from "@/components/auth-logo";
import { colors } from "@/theme/colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthLogo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
});
