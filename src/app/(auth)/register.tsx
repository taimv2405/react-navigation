import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
          autoComplete="username"
        />
        <AuthTextInput
          renderIcon={(props) => <Fontisto name="email" {...props} />}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <AuthTextInput
          renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
          placeholder="Enter password"
          secureTextEntry
          autoComplete="new-password"
        />
        <AuthTextInput
          renderIcon={(props) => <SimpleLineIcons name="lock" {...props} />}
          placeholder="Confirm password"
          secureTextEntry
          autoComplete="new-password"
        />
      </AuthForm>
    </AuthScreen>
  );
}
