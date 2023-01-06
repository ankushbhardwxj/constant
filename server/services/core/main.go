package main

import (
	"github.com/ankushbhardwaj/core/loaders"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware"
)

func main() {
	app := fiber.New()
	app.Use(middleware.Logger())
	app.Get("/health", func(c *fiber.Ctx)  {
		c.SendString("Service is up")
	})
	loaders.Loaders(app)
	api := app.Group("/api/v1", handler)
	if api != nil {
		app.Listen(":3001")
	}
}