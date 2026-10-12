// Võ Minh Tài - 23521382
import { type ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/theme/colors";

type ScreenTitleProps = {
  title: string;
  children?: ReactNode;
};

export function ScreenTitle({ title, children }: ScreenTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 16,
    color: colors.text,
  },
});
