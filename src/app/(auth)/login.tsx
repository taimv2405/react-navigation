import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AuthScreen } from "@/components/auth-screen";
import { AuthSwitchPrompt } from "@/components/auth-switch-prompt";
import { AuthTextInput } from "@/components/auth-text-input";
import { PrimaryButton } from "@/components/primary-button";
import { SocialLoginButton } from "@/components/social-login-button";
import { colors } from "@/theme/colors";
import { showNotSupportedAlert } from "@/utils/not-supported-alert";

const SOCIAL_ICON_SIZE = 56;

export default function LoginScreen() {
  return (
    <AuthScreen title="Welcome">
      <View style={styles.form}>
        <AuthTextInput
          renderIcon={(props) => <Fontisto name="email" {...props} />}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <View style={styles.passwordGroup}>
          <AuthTextInput
            renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
            placeholder="Password"
            secureTextEntry
            autoComplete="current-password"
          />
          <Pressable
            style={styles.forgotPassword}
            onPress={() => showNotSupportedAlert("Forgot password")}
            accessibilityRole="link"
            hitSlop={8}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>
        </View>
        <PrimaryButton title="LOG IN" />
      </View>
      <Text style={styles.socialTitle}>Or login with</Text>
      <View style={styles.socialButtons}>
        <SocialLoginButton
          provider="Facebook"
          onPress={() => showNotSupportedAlert("Facebook")}
        >
          <Image
            source={require("@/assets/images/facebook-logo.svg")}
            style={styles.socialIcon}
          />
        </SocialLoginButton>
        <SocialLoginButton
          provider="Google"
          onPress={() => showNotSupportedAlert("Google")}
        >
          <Image
            source={require("@/assets/images/google-logo.svg")}
            style={styles.socialIcon}
          />
        </SocialLoginButton>
      </View>
      <View style={styles.switchPrompt}>
        <AuthSwitchPrompt
          prompt="Don't have an account?"
          linkLabel="Sign up here!"
          onPress={() => router.push("/register")}
        />
      </View>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  socialTitle: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  switchPrompt: {
    marginTop: 24,
  },
  socialIcon: {
    width: SOCIAL_ICON_SIZE,
    height: SOCIAL_ICON_SIZE,
  },
  passwordGroup: {
    gap: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.accent,
  },
});
