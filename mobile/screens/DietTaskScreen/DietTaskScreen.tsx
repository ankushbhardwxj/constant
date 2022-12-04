import {
  Actionsheet,
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

interface IDietTaskScreenProps {}

const DietTaskScreen: React.FC<IDietTaskScreenProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View style={{ marginTop: 15 }}>
        <Header title="Diet" />
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
                onPress={() => {}}
              >
                <Icon as={Ionicons} name="checkmark" size={"lg"} />
              </Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Task Title</Heading>
              <Input
                value={""}
                onChangeText={() => {}}
                placeholder="Buy private jet..."
                w={"100%"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Description</Heading>
              <TextArea
                value={""}
                onChangeText={() => {}}
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
                onChange={() => {}}
                defaultValue="low"
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
    </View>
  );
};

export default DietTaskScreen;
