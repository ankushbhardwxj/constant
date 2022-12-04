import {
  NavigationContainer,
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "native-base";
import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import TaskCard from "../../components/TaskCard/TaskCard";
import BottomNavigator from "../../navigation/BottomNavigator";
import RootStackNavigator from "../../navigation/RootStackNavigator";

interface IHomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const navigator = useNavigation<any>();

  // const handlePress = () => {
  //   // navigation("WorkoutTaskScreen", {});
  //   navigator.navigate("WorkoutTaskScreen", {});
  //   console.log("Navigate");
  // };

  const handleNavigate = (screen: string) => {
    navigator.navigate(screen, {});
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View style={{ marginTop: 30 }}>
        <Header title="Today" hideBackBtn subHeader="4 Dec 2022, Sunday" />
      </View>
      <View style={{ marginTop: 40 }}>
        <TaskCard
          title="Workout"
          description="chest, shoulder"
          handleNavigate={() => handleNavigate("WorkoutTaskScreen")}
        />
        <TaskCard
          title="Coding"
          description="4 tasks left"
          handleNavigate={() => handleNavigate("CodingTaskScreen")}
        />
        <TaskCard
          title="Diet"
          description="5 glasses of water today"
          handleNavigate={() => handleNavigate("DietTaskScreen")}
        />
        <TaskCard
          title="Office"
          description="All tasks are done for the day"
          handleNavigate={() => handleNavigate("OfficeTaskScreen")}
        />
        <TaskCard
          title="Todo"
          description="5 tasks left"
          handleNavigate={() => handleNavigate("TodoScreen")}
        />
      </View>
      {/* <Button onPress={handlePress}>Click me</Button> */}
      {/* <BottomNavigator /> */}
    </View>
  );
};

export default HomeScreen;
