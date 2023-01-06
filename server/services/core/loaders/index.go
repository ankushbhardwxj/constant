package loaders

import (
	"github.com/ankushbhardwaj/core/db"
	"github.com/ankushbhardwaj/core/handlers"
	"github.com/joho/godotenv"
)

func Loaders() {
	godotenv.Load(".env.development")
	db.DbLoader()
	handlers.HandlerLoader()
}