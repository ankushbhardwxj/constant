import { useFonts } from "expo-font";
import React, { useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import * as SplashScreenExpo from "expo-splash-screen";

const SplashScreen = () => {
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <Text
        // @ts-ignore
        style={{
          color: "white",
          fontFamily: "SF-Pro",
          fontWeight: "bold",
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
