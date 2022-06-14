import React, { useState } from "react"
import { utils } from '../../../scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]
import { socket } from "./client"

// class ChatClient extends Component {
//   constructor(props) {
//     super(props)
//     connect()
//   }

//   send() {
//     console.log("hello")
//     sendMsg("hello")
//   }

//   render() {
//     return (
//       <div className="chat-client">
//         <button onClick={this.send}>Hit</button>
//       </div>
//     )
//   }
// }

const ChatClient = (props) => {
  // const [response, setResponse] = useState("")
  // const [socket, setSocket] = useState(null)

  const [msg, setMsg] = useState("Fizz")

  const SocketContext = React.createContext()

  // const connect = () => {
  //   console.log("Attempting Connection...")

  //   socket.onopen = () => {
  //     console.log("Successfully Connected")
  //   }
  //   socket.onmessage = msg => {
  //     console.log(msg)
  //   }
  //   socket.onclose = event => {
  //     console.log("Socket Closed Connection: ", event)
  //   }
  //   socket.onerror = error => {
  //     console.log("Socket Error: ", error)
  //   }
  // }

  // const sendMsg = msg => {
  //   console.log("sending msg: ", msg)
  //   socket.send(msg)
  // }

  // const msg = 'TEST'

  useEffectOnce(() => {
    // const socket = new WebSocket("ws://localhost:4001/ws") // Only for local testing!
    // const socket = new WebSocket("wss://codinghermit.net/socketapi/ws")
    // socket.onopen = () => {
    //   console.log("Socket Connected!")
    // }
    // socket.onmessage = msg => {
    //   console.log(msg)
    // }
    // socket.onclose = event => {
    //   console.log("Closed Socket Connection: ", event)
    // }
    // socket.onerror = error => {
    //   console.log("Socket Error: ", error)
    // }
    // const socket = socketIOClient(ENDPOINT);
    // socket.on("FromAPI", data => {
    //   setResponse(data)
    // })
  }, [])

  return(
    <SocketContext.Provider value={socket}>
      <div className="chat-client">

        {/* <button onClick={socket.onopen = () =>
          console.log("Successfully Connected")}>Connect</button> */}

        <button onClick={()=> {
          if (msg === 'Fizz') {
            setMsg('Buzz')
          } else {
            setMsg('Fizz')
          }
          socket.send(`${msg}!`)
          console.log("Sent message!")
        }}>Send</button>

      {/* <p> */}
        {/* It's <time dateTime={response}>{response}</time> */}
        {/* RES: {response} */}
      {/* </p> */}
    </div>
    </SocketContext.Provider>
  )
}

export default ChatClient
