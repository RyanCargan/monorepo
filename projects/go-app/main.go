package main

// import "C"
import (
	"fmt"
	"net/http"
)

func root(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "Hello from the server!\n")
}

func hello(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "Hello.\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func main() {

	http.HandleFunc("/api", root)
	http.HandleFunc("/api/hello", hello)
	http.HandleFunc("/api/headers", headers)

	http.ListenAndServe(":4000", nil)
}
