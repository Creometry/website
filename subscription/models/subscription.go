package models

type Subscription struct {
	Email string `json:"email" clover:"email"`
	Name  string `json:"name" clover:"name"`
}
