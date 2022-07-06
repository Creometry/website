package main

import (
	"website/subscription/controller"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Post("/newsletter", controller.AddEmail)
	app.Get("/newsletter", controller.GetCSV)
	app.Post("/mail", controller.SendMail)

	app.Listen(":5000")
}
