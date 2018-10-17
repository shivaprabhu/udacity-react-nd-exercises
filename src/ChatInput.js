import React, { Component } from "react";

class ChatInput extends Component {
  render() {
    return (
      <div>
        <form
          className="input-group"
          onSubmit={event => {
            this.props.sendChatMessage(this.props.user, event);
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.props.inputText[this.props.user.username]}
            onChange={event => {
              this.props.handleInputChange(this.props.user, event);
            }}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.props.isDisabled(this.props.user)}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatInput;
