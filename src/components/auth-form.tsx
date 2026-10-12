import { type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type AuthFormProps = {
  children: ReactNode;
};

export function AuthForm({ children }: AuthFormProps) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
});
