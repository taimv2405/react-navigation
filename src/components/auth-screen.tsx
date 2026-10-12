import { type ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthLogo } from "@/components/auth-logo";
import { colors } from "@/theme/colors";

type AuthScreenProps = {
  title: string;
  children?: ReactNode;
};

export function AuthScreen({ title, children }: AuthScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <AuthLogo />
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    marginVertical: 16,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
});
