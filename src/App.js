import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddUser from "./AddUser";
import Users from "./Users";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    users: [],
    userNameExists: false
  };

  addUser = event => {
    event.preventDefault();
    this.setState(currentState => ({
      users: [
        ...currentState.users,
        { firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, showGamesPlayedCount: true }
      ]
    }));
    this.clearInput();
  };

  handleInputChange = (input, value) => {
    this.setState({
      [input]: value
    });
  };

  clearInput = () => {
    this.setState({
      firstName: "",
      lastName: "",
      userName: ""
    });
  };

  toggleGamesPlayedCount = (userIndex, value) => {
    this.setState(currentState => ({
      users: currentState.users.map((user, index) => {
        if (index === userIndex) {
          user.showGamesPlayedCount = value;
          return user;
        }
        return user;
      })
    }));
  };

  checkUserName = userName => {
    this.state.users.forEach(user => {
      if (user.userName.toLowerCase() === userName.toLowerCase()) {
        this.setState({
          userNameExists: true
        });
      } else {
        this.setState({
          userNameExists: false
        });
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
        <div>
          <AddUser
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            userName={this.state.userName}
            addUser={this.addUser}
            handleInputChange={this.handleInputChange}
            checkUserName={this.checkUserName}
            userNameExists={this.state.userNameExists}
          />
          <p className={this.state.userNameExists ? "error" : "hide"}>Username already exists!</p>
          <Users users={this.state.users} toggleGamesPlayedCount={this.toggleGamesPlayedCount} />
        </div>
      </div>
    );
  }
}

export default App;
