import { useFonts } from "expo-font";
import React, { useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import * as SplashScreenExpo from "expo-splash-screen";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "SF-Pro": require("../assets/fonts/SF-Pro.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreenExpo.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreenExpo.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      // onLayout={onLayoutRootView}
      style={{ height: "100%", width: "100%", backgroundColor: "black" }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "SF-Pro",
          fontSize: "48",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        constant
      </Text>
    </View>
  );
};

export default SplashScreen;
