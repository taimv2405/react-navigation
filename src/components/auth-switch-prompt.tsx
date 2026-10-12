// Võ Minh Tài - 23521382
import {
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "@/theme/colors";

type AuthSwitchPromptProps = Pick<PressableProps, "onPress"> & {
  prompt: string;
  linkLabel: string;
};

export function AuthSwitchPrompt({
  prompt,
  linkLabel,
  onPress,
}: AuthSwitchPromptProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{prompt} </Text>
      <Pressable onPress={onPress} accessibilityRole="link" hitSlop={12}>
        <Text style={[styles.prompt, styles.link]}>{linkLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  prompt: {
    fontSize: 16,
    color: colors.text,
  },
  link: {
    fontWeight: "bold",
    color: colors.link,
  },
});
