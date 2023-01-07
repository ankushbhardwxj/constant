package handlers

import (
	"github.com/gofiber/fiber"
)

func GetWorkouts(c *fiber.Ctx) {
	c.SendString("Get Workouts")
}