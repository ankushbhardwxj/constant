package routes

import (
	"github.com/ankushbhardwxj/constant/services/auth/routes/auth"
	"github.com/gin-gonic/gin"
)

func HealthCheck(ctx *gin.Context) {
	ctx.JSON(200, gin.H{"message": "server is up"})
}

func SetupRouter(r *gin.Engine) {
	r.Use(gin.Recovery())
	r.GET("/health", HealthCheck)
	authRouter := r.Group("/auth")
	auth.AuthRouter(authRouter)
}
