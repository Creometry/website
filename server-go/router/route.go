package router

import (
	"website/server/controller"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	// Events
	app.Post("/events", controller.CreateEvent)
	app.Get("/events", controller.GetEvents)
	app.Put("/events", controller.AddAttendee)
	// Transaction
	app.Get("/transactions", controller.GetTransactions)
	//newsletter
	app.Post("/newsletter", controller.AddEmail)
	app.Get("/newsletter", controller.GetCSV)
}
