package models

type Attendee struct {
	EventId      string `json:"eventId"`
	Email        string `json:"email"`
	PaymentToken string `json:"paymentToken"`
}
