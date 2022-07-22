package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Event struct {
	Id          primitive.ObjectID `bson:"_id,omitempty"`
	CalendarId  string             `bson:"calendarId,omitempty"`
	Summary     string             `bson:"summary,omitempty"`
	Description string             `bson:"description,omitempty"`
	StartTime   string             `bson:"startTime,omitempty"`
	EndTime     string             `bson:"endTime,omitempty"`
	Price       float32            `bson:"price,emitempty"`
}

type Events struct {
	Events []Event `json: "events"`
}
