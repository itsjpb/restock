
import React, {useEffect, useState} from 'react';
import {AddCard} from './AddCard';
import dlh from './dlh.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dlh} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={AddCard}>add to trello board</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
