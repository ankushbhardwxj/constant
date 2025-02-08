package auth

import (
	"fmt"

	"github.com/ankushbhardwxj/constant/pkg/postgres"
	"github.com/go-pg/pg/v10/orm"
)

type User struct {
	Email     string
	Password  string
	FirstName string
	LastName  string
}

func CreateUserSchema() error {
	err := postgres.DB.Model((*User)(nil)).CreateTable(&orm.CreateTableOptions{})
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}

func UpdateUserQuery(user *User) (orm.Result, error) {
	return postgres.DB.Model(user).WherePK().Update()
}

func SignUpQuery(user *User) (orm.Result, error) {
	return postgres.DB.Model(user).Insert()
}
