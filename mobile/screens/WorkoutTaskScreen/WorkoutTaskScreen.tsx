import { Ionicons } from "@expo/vector-icons";
import {
  Actionsheet,
  Button,
  Heading,
  Icon,
  Input,
  TextArea,
  useDisclose,
  Text,
} from "native-base";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import BackBtn from "../../components/BackBtn/BackBtn";
import Header from "../../components/Header/Header";

interface IWorkoutTaskProps {}

interface IWorkoutTask {
  exerciseName: string;
  wt: string;
  reps?: string;
  sets?: string;
}

const WorkoutTaskScreen: React.FC<IWorkoutTaskProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [exerciseName, setExerciseName] = useState<string>("");
  const [wt, setWt] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [sets, setSets] = useState<string>("");
  const [workouts, setWorkouts] = useState<IWorkoutTask[]>([]);

  const handleAddWorkout = () => {
    const workout: IWorkoutTask = {
      exerciseName,
      wt,
      reps,
      sets,
    };
    setWorkouts([workout, ...workouts]);
    onClose();
    setExerciseName("");
    setWt("");
    setReps("");
    setSets("");
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View style={{ marginTop: 15 }}>
        <Header title="Workout" />
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View
            style={{
              height: "100%",
              width: "100%",
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Heading size={"lg"}>Add Workout</Heading>
              <Button
                style={{ backgroundColor: "transparent" }}
                onPress={handleAddWorkout}
              >
                <Icon as={Ionicons} name="checkmark" size={"lg"} />
              </Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Exercise Name</Heading>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 5,
                }}
                value={exerciseName}
                onChangeText={setExerciseName}
                placeholder="Bench press"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Weight (kg)</Heading>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 5,
                }}
                keyboardType={"numeric"}
                value={wt}
                onChangeText={setWt}
                placeholder=""
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Repetitions (per set)</Heading>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 5,
                }}
                keyboardType={"numeric"}
                value={reps}
                onChangeText={setReps}
                placeholder=""
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Heading size="sm">Total Sets</Heading>
              <TextInput
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 5,
                }}
                keyboardType={"numeric"}
                value={sets}
                onChangeText={setSets}
                placeholder=""
              />
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
          <Text style={{ color: "white" }}>Add workout</Text>
        </Button>
      </View>
      {workouts.length === 0 && (
        <View
          style={{
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            No workouts added at the moment. Go to the gym at the earliest.
          </Text>
        </View>
      )}
      {workouts.map((item: IWorkoutTask) => (
        <View style={{ marginLeft: 30, marginTop: 10 }}>
          <Heading style={{ color: "white" }} size="sm">
            {item.exerciseName}
          </Heading>
          <Text style={{ color: "white" }}>
            {item.sets} sets - {item.reps} reps
          </Text>
          <Text style={{ color: "white" }}>Max Weight - {item.wt} kgs</Text>
        </View>
      ))}
    </View>
  );
};

export default WorkoutTaskScreen;
