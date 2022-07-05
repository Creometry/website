package controller

import (
	"net/mail"

	"github.com/gofiber/fiber/v2"
	clov "github.com/ostafen/clover"
)

type Subscription struct {
	Email string `json:"email" clover:"email"`
	Type1 bool   `json:"type1" clover:"type1"`
	Type2 bool   `json:"type2" clover:"type2"`
	Type3 bool   `json:"type3" clover:"type3"`
}

func AddEmail(c *fiber.Ctx) error {
	sub := new(Subscription)

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

		db.Query("Subscription").Where(clov.Field("email").Eq(sub.Email)).Update(map[string]interface{}{
			"email": sub.Email,
			"type1": sub.Type1,
			"type2": sub.Type2,
			"type3": sub.Type3})
		return c.JSON("edited")
	} else {
		doc := clov.NewDocument()

		doc.Set("email", sub.Email)
		doc.Set("type1", sub.Type1)
		doc.Set("type2", sub.Type2)
		doc.Set("type3", sub.Type3)

		db.InsertOne("Subscription", doc)

		return c.JSON("inserted")
	}

}

func GetByType(c *fiber.Ctx) error {
	db, _ := clov.Open("creometry-db")
	defer db.Close()
	docs, _ := db.Query("Subscription").Where(clov.Field(c.Params("type")).Eq(true)).FindAll()
	sub := new(Subscription)
	emails := []string{}
	for _, doc := range docs {
		doc.Unmarshal(sub)
		emails = append(emails, sub.Email)
	}
	return c.JSON(emails)
}
