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

	// Load credentials
	mongo_uri := os.Getenv("MONGO_URI")
	dbName := os.Getenv("DB_NAME")
	eventCollName := os.Getenv("COLLECTION_NAME_EVENT")
	transactionCollName := os.Getenv("COLLECTION_NAME_TRANSACTION")
	newsletterCollName := os.Getenv("COLLECTION_NAME_SUBS")
	// Create a new Client
	Client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(mongo_uri))
	if err != nil {
		log.Fatalln("Connect:", err)
		return err
	}

	// Test DB connection by pinging
	if err := Client.Ping(context.TODO(), readpref.Primary()); err != nil {
		log.Fatalln("Ping:", err)
		return err
	}

	EventColl = Client.Database(dbName).Collection(eventCollName)
	TransColl = Client.Database(dbName).Collection(transactionCollName)
	NewsletterColl = Client.Database(dbName).Collection(newsletterCollName)

	log.Println("Opened database connection and loaded collection")

	return nil
}
