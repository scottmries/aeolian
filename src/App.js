import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import logo from './logo.svg';
import Synthesizer from './Synthesizer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
        <ReactCSSTransitionGroup 
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        <div className="container">
        <header className="App-header">
          <h1 className="App-title">aeolian.xyz</h1>
        </header>
        <main>
        <p className="App-intro">
          We will stream our handmade, electroacoustic Aeolian harp on this page.
        </p>
        <p>
          In the meantime, here is a prototype and a simulation of the audio.
        </p>
        <Synthesizer></Synthesizer>
        </main>
        <footer className="App-footer">
          <p>by Abigail Entsminger and Scott Ries</p>
          <p>Built with React</p>
        </footer>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
