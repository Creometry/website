package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Transaction struct {
	Id            primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	CalendarId    string             `bson:"calendarId,omitempty" json="calendarId"`
	Token         string             `bson:"token,omitempty" json="token"`
	BuyerId       float32            `bson:"buyerID,omitempty" json="buyerID"`
	TransactionID float32            `bson:"transactionID,omitempty" json="transactionID"`
	Amount        float32            `bson:"amount,omitempty" json="amount"`
	Date          time.Time          `bson:"date,omitempty" json="date"`
	Email         string             `bson:"email,omitempty" json="email"`
}
