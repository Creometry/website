package main

import (
	"log"
	"os"
	"website/subscription/controller"
	"website/subscription/database"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	if os.Getenv("DEV") == "true" {
		godotenv.Load()
	}

	app := fiber.New()

	err := database.Connect()
	if err != nil {
		log.Fatal(err)
	}

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:8001",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Post("/newsletter", controller.AddEmail)
	app.Get("/newsletter", controller.GetCSV)

	app.Listen(":5000")
}
