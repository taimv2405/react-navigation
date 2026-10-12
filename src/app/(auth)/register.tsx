import { Fontisto, Ionicons } from "@expo/vector-icons";

import { AuthForm } from "@/components/auth-form";
import { AuthScreen } from "@/components/auth-screen";
import { AuthTextInput } from "@/components/auth-text-input";

export default function RegisterScreen() {
  return (
    <AuthScreen title="Create New Account">
      <AuthForm>
        <AuthTextInput
          renderIcon={(props) => <Ionicons name="person-outline" {...props} />}
          placeholder="Enter username"
          autoCapitalize="none"
          autoComplete="username-new"
        />
        <AuthTextInput
          renderIcon={(props) => <Fontisto name="email" {...props} />}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </AuthForm>
    </AuthScreen>
  );
}
