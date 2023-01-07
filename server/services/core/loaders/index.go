package loaders

import (
	"github.com/ankushbhardwaj/core/db"
	"github.com/ankushbhardwaj/core/routes"
	"github.com/gofiber/fiber"
	"github.com/joho/godotenv"
)

func Loaders(app *fiber.App) {
	godotenv.Load(".env.development")
	db.DbLoader()
	routes.RouteLoader(app)
}