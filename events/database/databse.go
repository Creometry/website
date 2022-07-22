package database

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var Collection *mongo.Collection
var Client *mongo.Client

func Connect() error {
	var err error

	// Load credentials
	mongo_uri := os.Getenv("MONGO_URI")
	dbName := os.Getenv("DB_NAME")
	collName := os.Getenv("COLLECTION_NAME")
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

	Collection = Client.Database(dbName).Collection(collName)

	log.Println("Opened database connection and loaded collection")

	return nil
}
