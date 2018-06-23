import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    test: null,
    numQuestions: 0,
    numCorrect: 0,
    value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: proposedAnswer
  };
  checkScore = (answer, correctAnswer, proposedAnswer) => {
    console.log(answer, correctAnswer,proposedAnswer);

    if (correctAnswer === proposedAnswer && answer === true) {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }));
    } else if (correctAnswer !== proposedAnswer && answer === false) {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }));
    } else {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1
      }));
    }
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);

    this.setState({
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game
          data={{ value1: this.state.value1, value2: this.state.value2, value3: this.state.value3, proposedAnswer: this.state.proposedAnswer }}
          checkAnswer={this.checkScore}
        />
        <Score totalQuestions={this.state.numQuestions} totalCorrectAnswers={this.state.numCorrect} />
      </div>
    );
  }
}

export default App;
