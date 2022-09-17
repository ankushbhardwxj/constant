import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { NativeBaseProvider } from "native-base";
import * as Font from "expo-font";
import WorkoutTaskScreen from "./screens/WorkoutTaskScreen/WorkoutTaskScreen";
import RootStackNavigator from "./navigation/RootStackNavigator";
import BottomNavigator from "./navigation/BottomNavigator";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "SF-Pro": require("./assets/fonts/SF-Pro.ttf"),
  });

  return (
    <NativeBaseProvider>
      {/* <BottomNavigator /> */}

      <RootStackNavigator />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
