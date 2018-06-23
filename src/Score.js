import React, { Component } from "react";

class Score extends Component {
  render() {
    return (
      <p className="text">
        Your Score: {this.props.totalCorrectAnswers}/{this.props.totalQuestions}
      </p>
    );
  }
}

export default Score;
