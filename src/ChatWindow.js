import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";

class ChatWindow extends Component {
  render() {
    return (
      <div className="container">
        {this.props.users.map((user, index) => (
          <div key={index} className="chat-window">
            <h2>Super Awesome Chat</h2>

            <div className="name sender">{user.username}</div>
            <ChatList messages={this.props.messages} user={user} />
            <ChatInput
              isDisabled={this.props.isDisabled}
              sendChatMessage={this.props.sendChatMessage}
              user={user}
              handleInputChange={this.props.handleInputChange}
              inputText={this.props.inputText}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ChatWindow;
