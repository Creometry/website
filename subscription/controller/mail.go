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

	m.SetHeader("To", os.Getenv("SENDER_ADRESS"))

	m.SetHeader("Subject", mail.Title)

	m.SetBody("text/plain", fmt.Sprintf("From: %s \nEmail Adress: %s \nPhone Number: %s \nBody: %s", mail.SenderName, mail.SenderAdress, mail.SenderNumber, mail.Body))

	d := gomail.NewDialer("smtp.gmail.com", 587, os.Getenv("SENDER_ADRESS"), os.Getenv("SENDER_PWD"))

	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	if err := d.DialAndSend(m); err != nil {
		return err
	}
	return c.JSON("sent")
}
