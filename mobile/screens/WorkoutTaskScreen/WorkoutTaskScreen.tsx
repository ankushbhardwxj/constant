import { Actionsheet, Button, useDisclose } from "native-base";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import BackBtn from "../../components/BackBtn/BackBtn";
import Header from "../../components/Header/Header";

interface IWorkoutTaskProps {}

const WorkoutTaskScreen: React.FC<IWorkoutTaskProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Header title="Workout" />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <Button onPress={onOpen}>ActionSheet</Button>
    </View>
  );
};

export default WorkoutTaskScreen;
