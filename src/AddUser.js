import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addUser}>
          <input
            type="text"
            value={this.props.firstName}
            onChange={event => {
              this.props.handleInputChange("firstName", event.target.value.trim());
            }}
            placeholder="first name"
          />
          <input
            type="text"
            value={this.props.lastName}
            onChange={event => {
              this.props.handleInputChange("lastName", event.target.value.trim());
            }}
            placeholder="last name"
          />
          <input
            type="text"
            value={this.props.userName}
            onChange={event => {
              this.props.handleInputChange("userName", event.target.value.trim());
              this.props.checkUserName(event.target.value);
            }}
            placeholder="user name"
          />
          <button disabled={this.props.firstName === "" || this.props.lastName === "" || this.props.userName === "" || this.props.userNameExists}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
