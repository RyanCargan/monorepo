package dbutils

import (
	"fmt"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

// Establish connection using external driver.
func DatabaseConnection(driver, conn string) (*sqlx.DB, error) {
	db, err := sqlx.Connect(driver, conn)
	if err != nil {
		log.Fatalln(err)
	}
	return db, err
}

// SQL transaction with panic on failure.
func CreateTransaction(db *sqlx.DB) {
	tx := db.MustBegin()

	users := []User{
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
		{FirstName: "John", LastName: "Doe", Email: "johndoeDNE@gmail.net", Password: "supersecret"},
		{FirstName: "Jason", LastName: "Moiron", Email: "jmoiron@jmoiron.net", Password: "supersecret"},
	}

	for _, user := range users {
		tx.NamedExec("INSERT INTO user (first_name, last_name, email, password) VALUES (:first_name, :last_name, :email, :password)", &user)
	}

	tx.Commit()
}

// SQL query
func CreateQuery(db *sqlx.DB) {
	users := []User{}
	db.Select(&users, "SELECT * FROM user ORDER BY first_name ASC")
	for _, user := range users {
		fmt.Printf("\n---\n%+v", user)
	}
}

var Schema = `
DROP TABLE IF EXISTS user;
CREATE TABLE user (
	user_id    INTEGER PRIMARY KEY,
    first_name VARCHAR(80)  DEFAULT '',
    last_name  VARCHAR(80)  DEFAULT '',
	email      VARCHAR(250) DEFAULT '',
	password   VARCHAR(250) DEFAULT NULL
);
`

type User struct {
	UserId    int    `db:"user_id" csv:"user_id"`
	FirstName string `db:"first_name" csv:"first_name"`
	LastName  string `db:"last_name" csv:"last_name"`
	Email     string `db:"email" csv:"email"`
	Password  string `db:"password" csv:"password"`
}

// TODO: Argon2id password hashing
