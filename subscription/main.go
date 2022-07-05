package main

import (
	"website/subscription/controller"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Post("/subscription", controller.AddEmail)
	app.Get("/subscription/:type", controller.GetByType)

	app.Listen(":5000")
}
