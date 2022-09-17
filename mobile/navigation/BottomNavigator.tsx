import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "native-base";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LegacyScreen from "../screens/LegacyScreen/LegacyScreen";
import RootStackNavigator from "./RootStackNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          // backgroundColor: "rgba(34,36,40,1)",
          backgroundColor: "black",
          position: "absolute",
        },
      })}
      // initialRouteName="HomeScreen"
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon as={FontAwesome} name="list" size={size} color={color} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Legacy",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon as={FontAwesome} name="calendar" size={size} color={color} />
          ),
        }}
        name="LegacyScreen"
        component={LegacyScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
