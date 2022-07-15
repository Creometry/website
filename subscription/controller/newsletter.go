package controller

import (
	"net/mail"
	m "website/subscription/models"

	"github.com/gofiber/fiber/v2"
	clov "github.com/ostafen/clover"
)

func AddEmail(c *fiber.Ctx) error {
	sub := new(m.Subscription)

	if err := c.BodyParser(sub); err != nil {
		return err
	}

	if _, err := mail.ParseAddress(sub.Email); err != nil {
		return c.JSON("email field incorrect")
	}
	db, _ := clov.Open("creometry-db")
	defer db.Close()

	db.CreateCollection("Subscription")
	docs, _ := db.Query("Subscription").Where(clov.Field("email").Eq(sub.Email)).FindFirst()

	if docs != nil {
		return c.JSON("email adress already exists")
	} else {
		doc := clov.NewDocument()

		doc.Set("email", sub.Email)
		doc.Set("name", sub.Name)

		db.InsertOne("Subscription", doc)

		return c.JSON("inserted")
	}

}

func GetCSV(c *fiber.Ctx) error {
	db, _ := clov.Open("creometry-db")
	defer db.Close()

	docs, _ := db.Query("Subscription").FindAll()
	sub := new(m.Subscription)

	out := "email name \n"

	for _, doc := range docs {
		doc.Unmarshal(sub)

		out = out + sub.Email + " " + sub.Name + "\n"
	}

	c.Attachment("subs.csv")
	return c.SendString(out)
}
