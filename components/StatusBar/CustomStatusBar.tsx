import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { FC } from "react";

type customStatusBar = {
  style?: StatusBarStyle | undefined;
  backgroundColor?: string | undefined;
  hidden?: boolean | undefined;
  translucent?: boolean;
};

export const CustomStatusBar: FC<customStatusBar> = ({
  style,
  backgroundColor,
  hidden,
  translucent
}) => {
  return (
    <StatusBar
      style={style}
      backgroundColor={backgroundColor}
      hidden={hidden}
      translucent={translucent}
    />
  );
};
