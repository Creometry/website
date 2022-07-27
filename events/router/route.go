package router

import (
	"website/events/controller"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	// Events
	app.Post("/events", controller.CreateEvent)
	app.Get("/events", controller.GetEvents)
	app.Put("/events", controller.AddAttendee)
	// Transaction
	app.Get("/transactions", controller.GetTransactions)
}
