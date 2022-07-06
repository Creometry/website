package models

type Email struct {
	Receiver string `json:"receiver"`
	Body     string `json:"body"`
	Title    string `json:"title"`
}
