import React, { Component } from "react";
import ChatBubble from "./ChatBubble";

class ChatList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message, index) => (
          <ChatBubble key={index} message={message} user={this.props.user} />
        ))}
      </ul>
    );
  }
}

export default ChatList;
