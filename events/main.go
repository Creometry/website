package main

import (
	"log"
	"website/events/database"
	"website/events/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	err := database.Connect()
	if err != nil {
		log.Fatal(err)
	}

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	router.SetupRoutes(app)

	app.Listen(":5001")
}
