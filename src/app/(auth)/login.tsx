import { StyleSheet, Text, View } from "react-native";

import { AuthLogo } from "@/components/auth-logo";
import { AuthTextInput } from "@/components/auth-text-input";
import { colors } from "@/theme/colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthLogo />
      <Text style={styles.title} accessibilityRole="header">
        Welcome
      </Text>
      <AuthTextInput icon="mail-outline" placeholder="Email" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  title: {
    marginVertical: 16,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
});
