package router

import (
	"website/events/controller"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	// Group
	api := app.Group("/events")
	api.Post("/", controller.CreateEvent)
	api.Get("/", controller.GetEvents)
	api.Put("/", controller.AddAttendee)
	// Middleware if any
}
