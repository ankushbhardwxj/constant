import { useNavigation } from "@react-navigation/native";
import { Card, Heading, Text } from "native-base";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ITaskCardProps {
  title?: string;
  description?: string;
  handleNavigate?: () => void;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  title,
  description,
  handleNavigate,
}) => {
  const navigator = useNavigation<any>();

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <Card
        style={{
          borderColor: "white",
          borderWidth: 2,
          marginBottom: 12,
          marginLeft: 10,
          marginRight: 10,
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
