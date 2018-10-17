import React, { Component } from "react";

class ChatBubble extends Component {
  render() {
    return (
      <li className={this.props.message.username === this.props.user.username ? "message sender" : "message recipient"}>
        <p>{`${this.props.message.username}: ${this.props.message.text}`}</p>
      </li>
    );
  }
}

export default ChatBubble;
