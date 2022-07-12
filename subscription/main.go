package main

import (
	"website/subscription/controller"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Post("/newsletter", controller.AddEmail)
	app.Get("/newsletter", controller.GetCSV)
	app.Post("/mail", controller.SendMail)

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:8001",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Listen(":5000")
}
