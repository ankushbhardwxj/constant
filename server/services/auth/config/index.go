package config

import (
	"fmt"
	"log"
	"os"

	"github.com/spf13/viper"
)

func LoadEnvConfig() {
	config_file_path := "./config/development.env"
	viper.SetConfigFile(config_file_path)
	if err := viper.ReadInConfig(); err != nil {
		log.Fatal("Error in reading env file ", err)
	}
}

func GetEnv(key string) (value string) {
	value, ok := viper.Get(key).(string)
	if !ok {
		fmt.Println("Failed to get env token from viper. Reading directly from Environment..")
		value = os.Getenv(key)
		return value
	}
	return value
}
