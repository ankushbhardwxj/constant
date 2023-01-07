package routes

import (
	"github.com/ankushbhardwaj/core/handlers"
	"github.com/gofiber/fiber"
)

func RouteLoader(app *fiber.App) {
	api := app.Group("/api/v1")

	workoutTaskRoute := api.Group("/workout-task")
	workoutTaskRoute.Get("/get-workouts", handlers.GetWorkouts)
	workoutTaskRoute.Post("/add-workouts", handlers.GetWorkouts)
}