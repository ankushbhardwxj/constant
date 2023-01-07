package handlers

import (
	"fmt"
	"time"

	"github.com/ankushbhardwaj/core/db/schema"
	"github.com/gofiber/fiber"
	"github.com/kamva/mgm/v3"
)

type Workout struct {
	ExerciseName string
	Weight int
	Reps int
	Sets int
}

func GetWorkoutsByDate(c *fiber.Ctx) {
	workoutTask := &schema.WorkoutTaskSchema{}
	col1 := mgm.Coll(workoutTask)
	tm, err := time.Parse("2006-02-01", "2023-01-07T11:15:43.093+00:00")

	res, err := col1.Find(c, ebson.M{"created_date": tm}, workoutTask)
	// err := col1.First(bson.M{"created_date": }, workoutTask)
	// if err != nil {
	// 	c.SendString("Get Workouts")

	// }
}

func AddWorkoutTask(c *fiber.Ctx) {
	workout := new(Workout)
	c.BodyParser(workout)
	newWorkoutTaskObject := schema.CreateNewWorkoutTask(workout.ExerciseName, workout.Weight, workout.Reps, workout.Sets)
	fmt.Println(newWorkoutTaskObject)
	workoutTask := &schema.WorkoutTaskSchema{}
	err := mgm.Coll(workoutTask).Create(newWorkoutTaskObject)
	if err != nil {
		fmt.Println(err)
		c.SendStatus(500)
	}
	fmt.Println("Added Workout Task")
	c.SendStatus(200)
	c.SendString("Added Workout Task")
}