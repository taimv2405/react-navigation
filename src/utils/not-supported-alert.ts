import { Alert } from "react-native";

export function showNotSupportedAlert(title: string) {
  Alert.alert(title, "This feature is not supported yet.");
}
