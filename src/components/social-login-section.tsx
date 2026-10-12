// Võ Minh Tài - 23521382
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { SocialLoginButton } from "@/components/social-login-button";
import { colors } from "@/theme/colors";
import { showNotSupportedAlert } from "@/utils/not-supported-alert";

const SOCIAL_ICON_SIZE = 56;

export function SocialLoginSection() {
  return (
    <>
      <Text style={styles.title}>Or login with</Text>
      <View style={styles.buttons}>
        <SocialLoginButton
          provider="Facebook"
          onPress={() => showNotSupportedAlert("Facebook")}
        >
          <Image
            source={require("@/assets/images/facebook-logo.svg")}
            style={styles.icon}
          />
        </SocialLoginButton>
        <SocialLoginButton
          provider="Google"
          onPress={() => showNotSupportedAlert("Google")}
        >
          <Image
            source={require("@/assets/images/google-logo.svg")}
            style={styles.icon}
          />
        </SocialLoginButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  buttons: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  icon: {
    width: SOCIAL_ICON_SIZE,
    height: SOCIAL_ICON_SIZE,
  },
});
