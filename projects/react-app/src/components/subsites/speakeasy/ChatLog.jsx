import React from 'react'

const ChatLog = (props) => {
	const messages = props.chatLog.map((msg, index) => (
		<p key={index}>{msg.data}</p>
	))

	return (
	<div className="chat-log">
		<h3>Chat Log</h3>
		<hr />
		<br />
		{messages}
	</div>
	)
}

export default ChatLog
