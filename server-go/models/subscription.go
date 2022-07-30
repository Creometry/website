package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Subscription struct {
	Id    primitive.ObjectID `bson:"_id,omitempty"`
	Email string             `bson:"email,omitempty json:"email"`
	Name  string             `bson:"name,omitempty json:"name"`
}

type Subscriptions struct {
	Subs []Subscription `json:"subs"`
}
