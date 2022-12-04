import "react-native-gesture-handler";
import { Platform, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { NativeBaseProvider } from "native-base";
import * as Font from "expo-font";
import WorkoutTaskScreen from "./screens/WorkoutTaskScreen/WorkoutTaskScreen";
import RootStackNavigator from "./navigation/RootStackNavigator";
import BottomNavigator from "./navigation/BottomNavigator";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useState, useRef, useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "SF-Pro": require("./assets/fonts/SF-Pro.ttf"),
  });

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener: any = useRef();
  const responseListener: any = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token || "")
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification: any) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // useEffect(() => {
  //   schedulePushNotification();
  // });

  return (
    <NativeBaseProvider>
      {/* <BottomNavigator /> */}

      <RootStackNavigator />
    </NativeBaseProvider>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
