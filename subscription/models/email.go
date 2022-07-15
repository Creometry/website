package models

type Email struct {
	SenderAdress string `json:"adress"`
	Body         string `json:"body"`
	Title        string `json:"title"`
	SenderName   string `json:"name"`
	SenderNumber string `json:"number"`
}
