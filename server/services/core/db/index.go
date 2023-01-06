package db

import (
	"fmt"
	"os"

	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func DbLoader() {
	dbUri := os.Getenv("MONGO_URI")
	err := mgm.SetDefaultConfig(nil, "constant", options.Client().ApplyURI(dbUri))
	if err != nil {
		fmt.Println("Failed to connect to DB")
	}
	fmt.Println("Connected to DB: ", dbUri)
}