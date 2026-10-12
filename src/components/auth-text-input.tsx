import { Ionicons } from "@expo/vector-icons";
import { type ComponentProps } from "react";
import { StyleSheet, TextInput, type TextInputProps, View } from "react-native";

import { colors } from "@/theme/colors";

type AuthTextInputProps = TextInputProps & {
  icon: ComponentProps<typeof Ionicons>["name"];
};

export function AuthTextInput({
  icon,
  style,
  ...inputProps
}: AuthTextInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={28} color={colors.text} />
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
    alignSelf: "stretch",
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
