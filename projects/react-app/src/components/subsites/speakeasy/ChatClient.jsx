import React, { useState, createContext } from "react"
import ChatLog from "./ChatLog"
import { utils } from '../../../scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]
import { socket } from "./client"

const ChatClient = (props) => {

  const [msg, setMsg] = useState("Fizz")

  const SocketContext = createContext()

  let connect = () => {
    console.log("Connecting...");

    socket.onopen = () => {
      console.log("Successfully Connected");
    }

    socket.onmessage = msg => {
      console.log(msg)
    }

    socket.onclose = event => {
      console.log("Socket Closed Connection: ", event);
    }

    socket.onerror = error => {
      console.log("Socket Error: ", error)
    }
  }

  const handleKeyDown = (e) => {
    // Reset field height
    e.target.style.height = 'inherit'

    // Get computed styles for the element
    const computed = window.getComputedStyle(e.target)

    // Calculate height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                 + parseInt(computed.getPropertyValue('padding-top'), 10)
                 + e.target.scrollHeight
                 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                 + parseInt(computed.getPropertyValue('border-bottom-width'), 10)

    e.target.style.height = `${height}px`
    // Optional limit
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`
  }

  function refreshPage() {
    window.location.reload(false);
  }

  useEffectOnce(() => {
    connect()
  }, [socket])

  return(
    <SocketContext.Provider value={socket}>
      <div className="chat-client">
        <div style={{
          border: '10px solid white',
        }}>
          <ChatLog chatLog={[{data: 'CHAT1'}, {data: 'CHAT2'}]} />
        </div>
        <textarea
        style={{
          width: '98.5%',
        }}
        onKeyDown={handleKeyDown}/>
        <button onClick={()=> {
          if (msg === 'Fizz') {
            setMsg('Buzz')
          } else {
            setMsg('Fizz')
          }
          socket.send(`${msg}!`)
          console.log("Sent message!")
        }}>Send</button><br /><br />

        <button onClick={() => {
          refreshPage()
        }}>Reopen Connection</button><br /><br />

        <button onClick={() => {
          socket.close()
        }}>Close Connection</button>
    </div>
    </SocketContext.Provider>
  )
}

export default ChatClient
