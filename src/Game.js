import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.props.data.value1} + ${this.props.data.value2} + ${this.props.data.value3} = ${this.props.data.proposedAnswer}`}</p>
        </div>
        <button
          onClick={() => {
            this.props.checkAnswer(true, this.props.data.value1 + this.props.data.value2 + this.props.data.value3, this.props.data.proposedAnswer)
          }}
        >
          True
        </button>
        <button
          onClick={() => {
            this.props.checkAnswer(false, this.props.data.value1 + this.props.data.value2 + this.props.data.value3, this.props.data.proposedAnswer);
          }}
        >
          False
        </button>
      </div>
    );
  }
}

export default Game;
