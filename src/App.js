import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  state = {
    messages: [{ username: "Amy", text: "Hi, Jon!" }, { username: "Amy", text: "How are you?" }, { username: "John", text: "Hi, Amy! Good, you?" }],
    userInput: {
      Amy: "",
      John: ""
    }
  };

  sendChatMessage = (user, e) => {
    e.preventDefault();
    this.setState(oldState => ({
      messages: [...oldState.messages, { username: user.username, text: this.state.userInput[user.username] }]
    }));
    this.clearInput(user);
  };

  isDisabled = user => {    
    return this.state.userInput[user.username] === "" ? true : false;
  };

  handleInputChange = (user, event) => {
    this.setState({
      userInput: {
        [user.username]: event.target.value
      }
    });
  };

  clearInput = user => {
    this.setState({
      userInput: {
        [user.username]: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ChatWindow
          users={users}
          messages={this.state.messages}
          isDisabled={this.isDisabled}
          sendChatMessage={this.sendChatMessage}
          handleInputChange={this.handleInputChange}
          inputText={this.state.userInput}
        />
        )
      </div>
    );
  }
}

export default App;
