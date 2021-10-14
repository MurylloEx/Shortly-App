import { Platform } from "react-native";

export const KeyboardViewBehavior = Platform.OS === "ios" ? "padding" : "height";