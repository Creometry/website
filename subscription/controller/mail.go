package controller

import (
	"crypto/tls"
	"fmt"
	"os"
	"website/subscription/models"

	"github.com/gofiber/fiber/v2"
	gomail "gopkg.in/mail.v2"
)

func SendMail(c *fiber.Ctx) error {

	m := gomail.NewMessage()

	mail := new(models.Email)
	if err := c.BodyParser(mail); err != nil {
		return err
	}
	m.SetHeader("From", os.Getenv("SENDER_ADRESS"))

	m.SetHeader("To", mail.Receiver)

	m.SetHeader("Subject", mail.Title)

	m.SetBody("text/plain", mail.Body)

	d := gomail.NewDialer("smtp.gmail.com", 587, os.Getenv("SENDER_ADRESS"), os.Getenv("SENDER_PWD"))

	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	if err := d.DialAndSend(m); err != nil {
		fmt.Println(err)
	}
	return c.JSON("something")
}
