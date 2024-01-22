import { Dimensions, Platform } from "react-native";

export const windowWidth = Dimensions.get("screen").width
export const windowHeight = Dimensions.get("screen").height
export const platform: string = Platform.OS;
