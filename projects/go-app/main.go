package main

import (
	"fmt"

	"webapi/utils"
)

func main() {
	fmt.Println("Hello from main module.")
	utils.Test()

	// db, err := utils.DatabaseConnection("sqlite3", "file::memory:?cache=shared")
	db, err := utils.DatabaseConnection("sqlite3", "bin/sqlite.db")

	db.MustExec(utils.Schema)

	utils.CreateTransaction(db)

	users := []utils.User{}
	db.Select(&users, "SELECT * FROM user ORDER BY first_name ASC")
	for _, user := range users {
		fmt.Printf("\n---\n%+v", user)
	}

	print(err)
}
