package schema

import (
	"github.com/kamva/mgm/v3"
)

type WorkoutTaskSchema struct {
	mgm.DefaultModel `bson:",inline"`
	ExerciseName string `json:"ExerciseName" bson:"ExerciseName"`
	Weight int `json:"Weight" bson:"Weight"`
	Reps int `json:"Reps" bson:"Reps"`
	Sets int `json:"Sets" bson:"Sets"`
}

func CreateNewWorkoutTask (ExerciseName string, Weight int, Reps int, Sets int) *WorkoutTaskSchema {
	return &WorkoutTaskSchema{
		ExerciseName: ExerciseName,
		Weight: Weight,
		Reps: Reps,
		Sets: Sets,
	}
}