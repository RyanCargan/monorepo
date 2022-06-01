package main

import (
	"testing"
	"webapi/utils"
)

func TestCreateQuery(t *testing.T) {
	db, _ := utils.DatabaseConnection("sqlite3", "bin/sqlite.db")
	db.MustExec(utils.Schema)
	utils.CreateTransaction(db)

	users := []utils.User{}
	db.Select(&users, "SELECT * FROM user ORDER BY first_name ASC")

	got := users
	want := []utils.User{
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
		{FirstName: "John", LastName: "Doe", Email: "johndoeDNE@gmail.net", Password: "supersecret"},
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
	}

	if len(got) != len(want) {
		t.Errorf("got %q want %q", got, want)
	}
}
