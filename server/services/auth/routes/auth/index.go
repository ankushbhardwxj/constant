package auth

import (
	"fmt"

	"github.com/ankushbhardwxj/constant/pkg/postgres/auth"
	"github.com/gin-gonic/gin"
)

func AuthRouter(r *gin.RouterGroup) {
	fmt.Println("Auth Router")
	r.POST("/sign-up", SimpleSignUp)
	r.POST("/sign-in", SimpleSignIn)
	r.POST("/whoami", WhoAmI)
}

func SimpleSignIn(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Simple Sign In",
	})
}

type SignUpRequestBody struct {
	Email    string
	Password string
}

func SimpleSignUp(c *gin.Context) {
	var req SignUpRequestBody
	err := c.BindJSON(&req)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "Invalid Request Body",
		})
		return
	}
	err = auth.CreateUserSchema()
	if err != nil {
		fmt.Println(err)
		c.JSON(500, gin.H{
			"message": "Failed to create user schema",
		})
		return
	}
	res, err := auth.SignUpQuery(&auth.User{
		Email:     req.Email,
		Password:  req.Password,
		FirstName: "",
		LastName:  "",
	})
	if err != nil {
		c.JSON(500, gin.H{
			"message": "Internal Server Error",
		})
		return
	}
	c.JSON(200, gin.H{
		"rowsAffected": res.RowsAffected(),
	})
}

func WhoAmI(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Who Am I",
	})
}
