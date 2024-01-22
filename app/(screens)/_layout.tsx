import { Stack } from "expo-router";
import React from "react";

const ScreensLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ScreensLayout;
