package controller

import (
	"context"
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"
	"website/events/config"
	"website/events/database"
	"website/events/models"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gofiber/fiber/v2"
	"google.golang.org/api/calendar/v3"
)

func GetEvents(c *fiber.Ctx) error {
	//Get Service
	srv := config.GetSVC()

	myEvents := models.Events{}

	cursor, err := database.Collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return err
	}
	if err := cursor.Err(); err != nil {
		return err
	}
	if err = cursor.All(context.TODO(), &myEvents.Events); err != nil {
		return err
	}
	cursor.Close(context.TODO())

	for index := range myEvents.Events {
		//Get Event Info from Google API
		event, err := srv.Events.Get("primary", myEvents.Events[index].CalendarId).Do()
		if err != nil {
			return err
		}

		myEvents.Events[index].Summary = event.Summary
		myEvents.Events[index].Description = event.Description
		myEvents.Events[index].StartTime = event.Start.DateTime
		myEvents.Events[index].EndTime = event.End.DateTime
		myEvents.Events[index].Summary = event.Summary

	}
	return c.JSON(myEvents.Events)

}

func AddAttendee(c *fiber.Ctx) error {
	//Get Service
	srv := config.GetSVC()

	//Parse Body
	attendee := new(models.Attendee)
	if err := c.BodyParser(attendee); err != nil {
		return err
	}

	//Get Event Info
	event, err := srv.Events.Get("primary", attendee.EventId).Do()
	if err != nil {
		return err
	}
	tempEvent := models.Event{}

	err = database.Collection.FindOne(context.TODO(), bson.M{"calendarId": attendee.EventId}).Decode(&tempEvent)
	//Check if evenement is free
	if tempEvent.Price > 0 {
		if attendee.PaymentToken == "" {
			return errors.New("this event is not free, need payment token")
		}
		//send Get request to Paymee
		client := &http.Client{}
		req, err := http.NewRequest("GET", os.Getenv("PAYMEE_URL")+"/api/v1/payments/"+attendee.PaymentToken+"/check", nil)
		req.Header.Set("Authorization", "Token "+os.Getenv("PAYMEE_API_KEY"))
		resp, err := client.Do(req)
		defer resp.Body.Close()
		if err != nil {
			return err
		}
		//Parse paymee response
		var paymeeResp models.PaymeeResponse

		if err := json.NewDecoder(resp.Body).Decode(&paymeeResp); err != nil {
			log.Fatal(err)
		}
		//check if amount is same
		if paymeeResp.Data.Amount != tempEvent.Price {
			return errors.New("Amount is not same, error ")
		}
	}
	//Add new Email
	event.Attendees = append(event.Attendees,
		&calendar.EventAttendee{Email: attendee.Email},
	)

	//Update event
	_, err = srv.Events.Patch("primary", attendee.EventId, event).Do()
	if err != nil {
		return err
	}
	return c.JSON("email added")
}

func CreateEvent(c *fiber.Ctx) error {
	//Get Service
	srv := config.GetSVC()

	//Parse Body
	event := new(models.Event)
	if err := c.BodyParser(event); err != nil {
		return err
	}

	//Fill Event Info
	NewEvent := &calendar.Event{
		Summary:     event.Summary,
		Description: event.Description,
		Start: &calendar.EventDateTime{
			DateTime: event.StartTime,
			TimeZone: "Africa/Tunis",
		},
		End: &calendar.EventDateTime{
			DateTime: event.EndTime,
			TimeZone: "Africa/Tunis",
		},
		Attendees:               []*calendar.EventAttendee{},
		GuestsCanInviteOthers:   &[]bool{false}[0],
		GuestsCanSeeOtherGuests: &[]bool{false}[0],
	}

	//Create new Calendar Event
	calendarId := "primary"
	NewEvent, err := srv.Events.Insert(calendarId, NewEvent).Do()
	if err != nil {
		return err
	}

	//insert into DB
	insertResult, err := database.Collection.InsertOne(context.Background(), models.Event{CalendarId: NewEvent.Id, Price: event.Price})
	if err != nil {
		log.Fatalln("Insert:", err)
		return err
	}

	return c.JSON(insertResult)
}
