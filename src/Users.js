import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.users.length > 0
          ? this.props.users.map((user, index) => (
              <li key={user.userName} style={{ display: "flex" }}>
                <span style={{ paddingTop: "10px", paddingRight: "10px" }}>{`${user.userName} has played ${user.showGamesPlayedCount ? 0 : "*"} games `}</span>
                <button
                  onClick={() => {
                    this.props.toggleGamesPlayedCount(index, false);
                  }}
                  className={user.showGamesPlayedCount ? "show" : "hide"}
                >
                  Hide the Number of Games Played
                </button>
                <button
                  onClick={() => {
                    this.props.toggleGamesPlayedCount(index, true);
                  }}
                  className={!user.showGamesPlayedCount ? "show" : "hide"}
                >
                  Show the Number of Games Played
                </button>
              </li>
            ))
          : "No users"}
      </ul>
    );
  }
}

export default Users;
