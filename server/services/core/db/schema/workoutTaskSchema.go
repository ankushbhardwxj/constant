package schema

import "github.com/kamva/mgm/v3"

type WorkoutTaskSchema struct {
	mgm.DefaultModel `bson:",inline"`
	ExerciseName string `json:"ExerciseName" bson:"ExerciseName"`
	Weight string `json:"Weight" bson:"Weight"`
	Reps string `json:"Reps" bson:"Reps"`
	Sets string `json:"Sets" bson:"Sets"`
}

func CreateNewWorkoutTask (ExerciseName string, Weight string, Reps string, Sets string) *WorkoutTaskSchema {
	return &WorkoutTaskSchema{
		ExerciseName: ExerciseName,
		Weight: Weight,
		Reps: Reps,
		Sets: Sets,
	}
}