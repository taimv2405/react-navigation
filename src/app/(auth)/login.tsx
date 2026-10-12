import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import { AuthForm } from "@/components/auth-form";
import { AuthScreen } from "@/components/auth-screen";
import { AuthSwitchPrompt } from "@/components/auth-switch-prompt";
import { AuthTextInput } from "@/components/auth-text-input";
import { PrimaryButton } from "@/components/primary-button";
import { SocialLoginButton } from "@/components/social-login-button";
import { useAuthStore } from "@/stores/auth-store";
import { colors } from "@/theme/colors";
import { showNotSupportedAlert } from "@/utils/not-supported-alert";

const SOCIAL_ICON_SIZE = 56;

export default function LoginScreen() {
  const signIn = useAuthStore((state) => state.signIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!signIn(email, password)) {
      Alert.alert("Incorrect email or password.");
    }
  };

  return (
    <AuthScreen title="Welcome">
      <AuthForm>
        <AuthTextInput
          renderIcon={(props) => <Fontisto name="email" {...props} />}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <View style={styles.passwordGroup}>
          <AuthTextInput
            renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
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
        <PrimaryButton title="LOG IN" onPress={handleLogin} />
      </AuthForm>
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
      <AuthSwitchPrompt
        prompt="Don't have an account?"
        linkLabel="Sign up here!"
        onPress={() => router.push("/register")}
      />
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
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
