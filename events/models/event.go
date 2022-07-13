package models

type Event struct {
	Id          string `json:"id"`
	Summary     string `json:"summary"`
	Description string `json:"description"`
	StartTime   string `json:"startTime"`
	EndTime     string `json:"endTime"`
}
