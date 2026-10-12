import { type ReactNode } from "react";
import { Pressable, type PressableProps } from "react-native";

type SocialLoginButtonProps = Omit<PressableProps, "children"> & {
  provider: string;
  children: ReactNode;
};

export function SocialLoginButton({
  provider,
  children,
  ...pressableProps
}: SocialLoginButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Log in with ${provider}`}
      hitSlop={8}
      {...pressableProps}
    >
      {children}
    </Pressable>
  );
}
