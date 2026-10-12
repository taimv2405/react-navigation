import { StyleSheet, Text, View } from "react-native";

import { AuthLogo } from "@/components/auth-logo";
import { colors } from "@/theme/colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthLogo />
      <Text style={styles.title} accessibilityRole="header">
        Welcome
      </Text>
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
  title: {
    marginTop: 16,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
});
