import {
  Fontisto,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AuthLogo } from "@/components/auth-logo";
import { AuthTextInput } from "@/components/auth-text-input";
import { PrimaryButton } from "@/components/primary-button";
import { SocialLoginButton } from "@/components/social-login-button";
import { colors } from "@/theme/colors";
import { showNotSupportedAlert } from "@/utils/not-supported-alert";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AuthLogo />
      <Text style={styles.title} accessibilityRole="header">
        Welcome
      </Text>
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
          <MaterialCommunityIcons
            name="facebook"
            size={56}
            color={colors.facebook}
          />
        </SocialLoginButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  title: {
    marginVertical: 16,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
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
