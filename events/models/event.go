package models

type Event struct {
	Id          string  `json:"id"`
	Summary     string  `json:"summary"`
	Description string  `json:"description"`
	StartTime   string  `json:"startTime"`
	EndTime     string  `json:"endTime"`
	Price       float32 `json:"price"`
}
type EventDB struct {
	EventId string  `clover:"eventId"`
	Price   float32 `clover:"price"`
}
