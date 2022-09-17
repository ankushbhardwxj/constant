import { useNavigation } from "@react-navigation/native";
import { Card, Heading, Text } from "native-base";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ITaskCardProps {
  title?: string;
  description?: string;
}

const TaskCard: React.FC<ITaskCardProps> = ({ title, description }) => {
  const navigator = useNavigation<any>();
  const handlePress = () => {
    navigator.navigate("WorkoutTaskScreen", {});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card
        style={{
          borderColor: "white",
          borderWidth: 2,
          marginBottom: 12,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <Heading color={"white"} size={"lg"}>
          {title}
        </Heading>
        <Heading color={"white"} size={"xs"}>
          {description}
        </Heading>
      </Card>
    </TouchableOpacity>
  );
};

export default TaskCard;
