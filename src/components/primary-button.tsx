// Võ Minh Tài - 23521382
import { Pressable, type PressableProps, StyleSheet, Text } from "react-native";

import { colors } from "@/theme/colors";

type PrimaryButtonProps = Omit<PressableProps, "children" | "style"> & {
  title: string;
};

export function PrimaryButton({ title, ...pressableProps }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      {...pressableProps}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    color: colors.onPrimary,
  },
});
