// Võ Minh Tài - 23521382
import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef } from "react";
import { type TextInput } from "react-native";

import { AuthForm } from "@/components/auth-form";
import { AuthScreen } from "@/components/auth-screen";
import { AuthSwitchPrompt } from "@/components/auth-switch-prompt";
import { AuthTextInput } from "@/components/auth-text-input";
import { PrimaryButton } from "@/components/primary-button";
import { showNotSupportedAlert } from "@/utils/not-supported-alert";

export default function RegisterScreen() {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const handleCreate = () => showNotSupportedAlert("Create account");

  return (
    <AuthScreen title="Create New Account">
      <AuthForm>
        <AuthTextInput
          renderIcon={(props) => <Ionicons name="person-outline" {...props} />}
          label="Username"
          placeholder="Enter username"
          autoCapitalize="none"
          autoComplete="username"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <AuthTextInput
          ref={emailRef}
          renderIcon={(props) => <Fontisto name="email" {...props} />}
          label="Email"
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <AuthTextInput
          ref={passwordRef}
          renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          autoComplete="new-password"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => confirmPasswordRef.current?.focus()}
        />
        <AuthTextInput
          ref={confirmPasswordRef}
          renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
          label="Confirm password"
          placeholder="Confirm password"
          secureTextEntry
          autoComplete="new-password"
          returnKeyType="done"
          onSubmitEditing={handleCreate}
        />
        <PrimaryButton title="CREATE" onPress={handleCreate} />
      </AuthForm>
      <AuthSwitchPrompt
        prompt="Already have an account?"
        linkLabel="Login now!"
        onPress={() => router.dismissTo("/login")}
      />
    </AuthScreen>
  );
}
