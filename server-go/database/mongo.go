package database

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var EventColl *mongo.Collection
var TransColl *mongo.Collection
var NewsletterColl *mongo.Collection
var Client *mongo.Client

func Connect() error {
	var err error

	// Load values
	mongo_uri, err := os.ReadFile("variables/MONGO_URI")
	if err != nil {
		return err
	}
	dbName, err := os.ReadFile("variables/DB_NAME")
	if err != nil {
		return err
	}
	eventCollName, err := os.ReadFile("variables/COLLECTION_NAME_EVENT")
	if err != nil {
		return err
	}
	transactionCollName, err := os.ReadFile("variables/COLLECTION_NAME_TRANSACTION")
	if err != nil {
		return err
	}
	newsletterCollName, err := os.ReadFile("variables/COLLECTION_NAME_SUBS")
	if err != nil {
		return err
	}
	// Create a new Client
	Client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(string(mongo_uri)))
	if err != nil {
		log.Fatalln("Connect:", err)
		return err
	}

	// Test DB connection by pinging
	if err := Client.Ping(context.TODO(), readpref.Primary()); err != nil {
		log.Fatalln("Ping:", err)
		return err
	}

	EventColl = Client.Database(string(dbName)).Collection(string(eventCollName))
	TransColl = Client.Database(string(dbName)).Collection(string(transactionCollName))
	NewsletterColl = Client.Database(string(dbName)).Collection(string(newsletterCollName))

	log.Println("Opened database connection and loaded collection")

	return nil
}
