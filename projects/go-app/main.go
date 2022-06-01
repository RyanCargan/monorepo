package main

import (
	"fmt"

	"webapi/utils"
)

func main() {
	// db, err := utils.DatabaseConnection("sqlite3", "file::memory:?cache=shared")
	db, _ := utils.DatabaseConnection("sqlite3", "bin/sqlite.db")

	db.MustExec(utils.Schema)

	utils.CreateTransaction(db)

	utils.CreateQuery(db)

	fmt.Println(Hello())
}

func Hello() string {
	return "Hello world!"
}
