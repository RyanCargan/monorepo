package auth

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/google/uuid"
)

// Auth code start
// User store (replace with DB)
var users = map[string]string{
	"user1": "password1",
	"user2": "password2",
}

// Session store (replace with DB)
var sessions = map[string]session{}

type session struct {
	username string
	expiry   time.Time
}

// Session expiration checker
func (s session) isExpired() bool {
	return s.expiry.Before(time.Now())
}

// Struct to match JSON object in request body
type Credentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

func SignUp(w http.ResponseWriter, r *http.Request) {
	var creds Credentials

	err := json.NewDecoder(r.Body).Decode(&creds)
	// log.Print(err)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	users[creds.Username] = creds.Password

	// SignIn(w, r)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	var creds Credentials

	err := json.NewDecoder(r.Body).Decode(&creds)
	// log.Print(err)
	if err != nil {
		// HTTP error reponse for improperly structured request body
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// Get the expected password from our in memory map
	expectedPassword, ok := users[creds.Username]

	// Proceed IF password exists for user AND it matches recieved password or return 401 status
	if !ok || expectedPassword != creds.Password {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	// Generate time-limited and randomized session token with uuid library
	sessionToken := uuid.NewString()
	expiresAt := time.Now().Add(120 * time.Second)

	// Set token in session store with other session information
	sessions[sessionToken] = session{
		username: creds.Username,
		expiry:   expiresAt,
	}

	// Set client cookie for "session_token" as generated token with expiry time of 120 secs
	http.SetCookie(w, &http.Cookie{
		Name:    "session_token",
		Value:   sessionToken,
		Expires: expiresAt,
		// HttpOnly: true, // Block cookie viewing by client
	})
}

func CheckStatus(w http.ResponseWriter, r *http.Request) {
	// Obtain session token from any request's cookies
	c, err := r.Cookie("session_token")
	if err != nil {
		if err == http.ErrNoCookie {
			// Return 401 if cookie is missing
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// Return bad request status for other error types
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value

	// Retrieve session from session store
	userSession, exists := sessions[sessionToken]
	if !exists {
		// Return 401 if session token not present in session store
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	// Delete session and return 401 if expired
	if userSession.isExpired() {
		delete(sessions, sessionToken)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	// Return confirmation message if session valid
	w.Write([]byte(fmt.Sprintf("You're signed in %s!", userSession.username)))
}

func Refresh(w http.ResponseWriter, r *http.Request) {
	// Start of code that mirrors first part of `CheckStatus` route
	c, err := r.Cookie("session_token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value

	userSession, exists := sessions[sessionToken]
	if !exists {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	if userSession.isExpired() {
		delete(sessions, sessionToken)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	// End of code that mirrors first part of `CheckStatus` route

	// Create new session token if previous token is still valid
	newSessionToken := uuid.NewString()
	expiresAt := time.Now().Add(120 * time.Second)

	// Set token and user in session store
	sessions[newSessionToken] = session{
		username: userSession.username,
		expiry:   expiresAt,
	}

	// Delete old session token
	delete(sessions, sessionToken)

	// Set new token as user's `session_token` cookie
	http.SetCookie(w, &http.Cookie{
		Name:    "session_token",
		Value:   newSessionToken,
		Expires: time.Now().Add(120 * time.Second),
		// HttpOnly: true, // Block cookie viewing by client
	})
}

func Logout(w http.ResponseWriter, r *http.Request) {
	c, err := r.Cookie("session_token")
	if err != nil {
		// Return 401 if cookie isn't set
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// Return 400 for other error types
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value

	// Remove user's session from session store
	delete(sessions, sessionToken)

	// Allow client to know of cookie expiry by setting session token to empty value with current time as expiry in reponse
	http.SetCookie(w, &http.Cookie{
		Name:    "session_token",
		Value:   "",
		Expires: time.Now(),
	})
}

// Auth code end
