import { StyleSheet, Text, type TextProps } from "react-native";

import { colors } from "@/theme/colors";

type AuthSwitchPromptProps = Pick<TextProps, "onPress"> & {
  prompt: string;
  linkLabel: string;
};

export function AuthSwitchPrompt({
  prompt,
  linkLabel,
  onPress,
}: AuthSwitchPromptProps) {
  return (
    <Text style={styles.prompt}>
      {prompt}{" "}
      <Text style={styles.link} onPress={onPress} accessibilityRole="link">
        {linkLabel}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  prompt: {
    marginTop: 24,
    fontSize: 16,
    color: colors.text,
  },
  link: {
    fontWeight: "bold",
    color: colors.link,
  },
});
