import React, { Component } from "react";
import { connect, sendMsg } from "./client";

class ChatClient extends Component {
  constructor(props) {
    super(props)
    connect()
  }

  send() {
    console.log("hello")
    sendMsg("hello")
  }

  render() {
    return (
      <div className="chat-client">
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default ChatClient
