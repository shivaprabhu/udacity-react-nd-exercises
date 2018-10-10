import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  	text:""
  }
	
  updateText(text){
  	this.setState(
    	() => ({text:text})
    )  
  }
  render() {
    const { text } = this.state
	console.log(text)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={text} onChange={ (event)=> this.updateText(event.target.value)}/>
          <p className="echo">Echo: {text}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
