package controller

import (
	"context"

	"website/events/database"
	"website/events/models"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gofiber/fiber/v2"
)

func GetTransactions(c *fiber.Ctx) error {
	transactions := []models.Transaction{}

	cursor, err := database.TransColl.Find(context.TODO(), bson.M{})
	if err != nil {
		return err
	}
	if err := cursor.Err(); err != nil {
		return err
	}
	if err = cursor.All(context.TODO(), &transactions); err != nil {
		return err
	}
	cursor.Close(context.TODO())
	return c.JSON(transactions)

}
