// Võ Minh Tài - 23521382
import { type ReactNode } from "react";
import { StyleSheet, TextInput, type TextInputProps, View } from "react-native";

import { colors } from "@/theme/colors";

const ICON_SIZE = 24;

type AuthTextInputProps = TextInputProps & {
  renderIcon: (props: { size: number; color: string }) => ReactNode;
};

export function AuthTextInput({
  renderIcon,
  style,
  ...inputProps
}: AuthTextInputProps) {
  return (
    <View style={styles.container}>
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {renderIcon({ size: ICON_SIZE, color: colors.text })}
      </View>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.placeholder}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: colors.text,
  },
});
