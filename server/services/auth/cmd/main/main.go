package main

import (
	"flag"

	"github.com/ankushbhardwxj/constant/pkg/postgres"
	"github.com/ankushbhardwxj/constant/services/auth/config"
	"github.com/ankushbhardwxj/constant/services/auth/routes"
	"github.com/ankushbhardwxj/constant/utils"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

func main() {
	r := gin.New()
	config.LoadEnvConfig()
	db_uri := config.GetEnv("POSTGRES_URI")
	postgres.Connect(db_uri)
	log.SetLevel(log.InfoLevel)
	log.SetFormatter(&log.JSONFormatter{})
	r.Use(utils.LogrusLogger())
	routes.SetupRouter(r)

	var addr = flag.String("addr", ":8081", "http service address")
	r.Run(*addr)
}
