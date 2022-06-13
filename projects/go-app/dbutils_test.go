package main

import (
	"testing"
	"webapi/dbutils"
)

func TestCreateQuery(t *testing.T) {
	db, _ := dbutils.DatabaseConnection("sqlite3", "bin/sqlite.db")
	db.MustExec(dbutils.Schema)
	dbutils.CreateTransaction(db)

	users := []dbutils.User{}
	db.Select(&users, "SELECT * FROM user ORDER BY first_name ASC")

	got := users
	want := []dbutils.User{
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
		{FirstName: "John", LastName: "Doe", Email: "johndoeDNE@gmail.net", Password: "supersecret"},
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
	}

	if len(got) != len(want) {
		t.Errorf("got %q want %q", got, want)
	}
}
