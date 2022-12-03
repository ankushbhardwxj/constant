import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Stack } from "native-base";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import TodoScreen from "../screens/TodoScreen/TodoScreen";
import WorkoutTaskScreen from "../screens/WorkoutTaskScreen/WorkoutTaskScreen";
import BottomNavigator from "./BottomNavigator";

const RootStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigator">
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomNavigator"
          component={BottomNavigator}
        />
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="TodoScreen"
          component={TodoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
