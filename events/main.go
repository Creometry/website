package main

import (
	"website/events/controller"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Post("/events", controller.AddAttendee)
	app.Get("/events", controller.GetEvents)

	app.Listen(":5000")
}