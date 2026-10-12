import { type ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AuthLogo } from "@/components/auth-logo";
import { colors } from "@/theme/colors";

type AuthScreenProps = {
  title: string;
  children?: ReactNode;
};

export function AuthScreen({ title, children }: AuthScreenProps) {
  return (
    <View style={styles.container}>
      <AuthLogo />
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      {children}
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
