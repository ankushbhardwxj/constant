import {
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "native-base";
import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import TaskCard from "../../components/TaskCard/TaskCard";

interface IHomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const navigator = useNavigation<any>();

  const handlePress = () => {
    // navigation("WorkoutTaskScreen", {});
    navigator.navigate("WorkoutTaskScreen", {});
    console.log("Navigate");
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Header title="Today" />
      <View style={{ marginTop: 40 }}>
        <TaskCard title="Hello" description="hello" />
        <TaskCard title="Hello" description="hello" />
        <TaskCard title="Hello" description="hello" />
      </View>
      {/* <Button onPress={handlePress}>Click me</Button> */}
    </View>
  );
};

export default HomeScreen;
