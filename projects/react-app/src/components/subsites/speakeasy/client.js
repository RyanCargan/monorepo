/*
  Change this to wss://codinghermit.net/socketapi/ws before any git commit/push!
*/
// var socket = new WebSocket("ws://localhost:4001/ws") // Only for local testing!
var socket = new WebSocket("wss://codinghermit.net/socketapi/ws")

let connect = () => {
  console.log("Attempting Connection...")

  socket.onopen = () => {
    console.log("Successfully Connected")
  }
  socket.onmessage = msg => {
    console.log(msg);
  }
  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event)
  }
  socket.onerror = error => {
    console.log("Socket Error: ", error)
  }
}

let sendMsg = msg => {
  console.log("sending msg: ", msg)
  socket.send(msg)
}

export { connect, sendMsg }
