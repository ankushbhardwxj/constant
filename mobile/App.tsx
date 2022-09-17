import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { NativeBaseProvider } from "native-base";
import * as Font from "expo-font";
import WorkoutTaskScreen from "./screens/WorkoutTaskScreen/WorkoutTaskScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = Font.useFonts({
    "SF-Pro": require("./assets/fonts/SF-Pro.ttf"),
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WorkoutTaskScreen">
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="WorkoutTaskScreen"
            component={WorkoutTaskScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
