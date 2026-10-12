import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { colors } from "@/theme/colors";

const LOGO_SIZE = 124;
const ICON_SIZE = 84;

export function AuthLogo() {
  return (
    <View style={styles.circle} accessibilityIgnoresInvertColors>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.icon}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: colors.logoBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
