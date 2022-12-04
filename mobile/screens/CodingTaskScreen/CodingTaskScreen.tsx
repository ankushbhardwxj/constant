import {
  Actionsheet,
  Badge,
  Button,
  Checkbox,
  Heading,
  Icon,
  Input,
  Radio,
  Stack,
  Text,
  TextArea,
  useDisclose,
} from "native-base";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import { Ionicons } from "@expo/vector-icons";

interface ICodingTaskScreenProps {}

interface ICodingTask {
  title: string;
  description?: string;
  createdAt: number;
  priority?: string;
  done: boolean;
}

const CodingTaskScreen: React.FC<ICodingTaskScreenProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [tasks, setTasks] = useState<ICodingTask[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");

  const handleAddTask = () => {
    onClose();
    const taskObj: ICodingTask = {
      title,
      description,
      createdAt: Date.now(),
      priority,
      done: false,
    };
    setTasks([taskObj, ...tasks]);
    setTitle("");
    setDescription("");
    setPriority("");
  };

  const handleTaskDone = (idx: number) => {
    let newTasks = tasks.map((item: ICodingTask, i: number) => {
      if (idx === i) item.done = !item.done;
      return item;
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View style={{ marginTop: 15 }}>
        <Header title="Coding" />
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View
            style={{
              height: "100%",
              width: "100%",
              padding: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Heading size={"lg"}>Add Task</Heading>
              <Button
                style={{ backgroundColor: "transparent" }}
                onPress={handleAddTask}
              >
                <Icon as={Ionicons} name="checkmark" size={"lg"} />
              </Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Task Title</Heading>
              <Input
                value={title}
                onChangeText={setTitle}
                placeholder="Buy private jet..."
                w={"100%"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Description</Heading>
              <TextArea
                value={description}
                onChangeText={setDescription}
                autoCompleteType={""}
                placeholder="Get 100Ms and fly to Switzerland..."
                w="100%"
              ></TextArea>
            </View>
            <View
              style={{ marginTop: 20, display: "flex", flexDirection: "row" }}
            >
              <Heading size="sm">Priority</Heading>
              <Radio.Group
                onChange={setPriority}
                defaultValue={priority}
                name="priority cue"
              >
                <Stack
                  direction="row"
                  alignItems={{
                    base: "flex-start",
                    md: "center",
                  }}
                  style={{ marginLeft: 20, marginTop: 3 }}
                  space={2}
                >
                  <Radio
                    colorScheme="red"
                    value="high"
                    size="sm"
                    accessibilityLabel="1"
                  />
                  <Radio
                    colorScheme="yellow"
                    value="medium"
                    size="sm"
                    accessibilityLabel="2"
                  />
                  <Radio
                    colorScheme="green"
                    value="low"
                    size="sm"
                    accessibilityLabel="3"
                  />
                </Stack>
              </Radio.Group>
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
      <View style={{ marginLeft: "auto" }}>
        <Button
          style={{
            width: 120,
            backgroundColor: "black",
            borderColor: "white",
            borderWidth: 1,
          }}
          size={"md"}
          onPress={onOpen}
        >
          <Text style={{ color: "white" }}>Add a task</Text>
        </Button>
      </View>
      <View>
        {tasks.length === 0 && (
          <View
            style={{ marginLeft: "auto", marginRight: "auto", marginTop: 20 }}
          >
            <Text style={{ color: "white" }}>No more tasks remaining.</Text>
          </View>
        )}
        {tasks.map((item: ICodingTask, idx: number) => (
          <View
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 20,
              borderWidth: 1,
              borderColor: "white",
              padding: 15,
              borderRadius: 10,
              marginRight: 20,
            }}
          >
            <View style={{ marginTop: 7 }}>
              <Checkbox
                onTouchStart={() => handleTaskDone(idx)}
                accessibilityLabel="1"
                value={""}
              />
            </View>

            <View
              style={{
                width: "100%",
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Heading size={"sm"} style={{ color: "white", marginLeft: 10 }}>
                  {item.title}
                </Heading>
                {item.priority === "high" && (
                  <Badge colorScheme={"red"}>{item.priority}</Badge>
                )}
                {item.priority === "low" && (
                  <Badge colorScheme={"green"}>{item.priority}</Badge>
                )}
                {item.priority === "medium" && (
                  <Badge colorScheme={"yellow"}>{item.priority}</Badge>
                )}
              </View>
              <Text style={{ color: "white", marginLeft: 10 }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CodingTaskScreen;
