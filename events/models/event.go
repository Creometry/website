package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Event struct {
	Id          primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	CalendarId  string             `bson:"calendarId,omitempty" json="calendarId"`
	Summary     string             `bson:"summary,omitempty" json="summary"`
	Description string             `bson:"description,omitempty" json="description"`
	StartTime   string             `bson:"startTime,omitempty" json="startTime"`
	EndTime     string             `bson:"endTime,omitempty" json="endTime"`
	Price       float32            `bson:"price,emitempty" json="price"`
	ImageLink   string             `bson:"imageLink,emitempty" json="imageLink"`
}

type Events struct {
	Events []Event `json: "events"`
}
