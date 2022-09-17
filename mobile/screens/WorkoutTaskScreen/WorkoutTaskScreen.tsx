import React from "react";
import { View } from "react-native";
import BackBtn from "../../components/BackBtn/BackBtn";
import Header from "../../components/Header/Header";

interface IWorkoutTaskProps {}

const WorkoutTaskScreen: React.FC<IWorkoutTaskProps> = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <BackBtn />
      <Header title="Workout" />
    </View>
  );
};

export default WorkoutTaskScreen;
