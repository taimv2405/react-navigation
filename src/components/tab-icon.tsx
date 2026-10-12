import { FontAwesome } from "@expo/vector-icons";
import { type ComponentProps } from "react";
import { type ColorValue } from "react-native";

import { colors } from "@/theme/colors";

type TabIconProps = {
  name: ComponentProps<typeof FontAwesome>["name"];
  focused: boolean;
  color: ColorValue;
  size: number;
};

export function TabIcon({ name, focused, color, size }: TabIconProps) {
  return (
    <FontAwesome
      name={name}
      size={size}
      color={focused ? color : colors.text}
    />
  );
}
