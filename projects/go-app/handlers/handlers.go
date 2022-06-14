package handlers

import (
	"fmt"
	"log"
	"net/http"
	"webapi/auth"

	"github.com/gorilla/websocket"
)

func MuxRoutes() {
	finish := make(chan bool)

	mux := http.NewServeMux()
	ws := http.NewServeMux()

	mux.HandleFunc("/signup", auth.SignUp)
	mux.HandleFunc("/signin", auth.SignIn)
	mux.HandleFunc("/check", auth.CheckStatus)
	mux.HandleFunc("/refresh", auth.Refresh)
	mux.HandleFunc("/logout", auth.Logout)

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Server active.")
	})

	ws.HandleFunc("/ws", serveWs)

	go func() {
		log.Fatal(http.ListenAndServe(":4000", mux))
	}()

	go func() {
		log.Fatal(http.ListenAndServe(":4001", ws))
	}()

	<-finish
}

// Socket code start
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func reader(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}

	}
}

func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}
	reader(ws)
}

// Socket code end
