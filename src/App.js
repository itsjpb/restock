
import React, {useEffect, useState} from 'react';
import {AddCard} from './AddCard';
import dlh from './dlh.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dlh} className="App-logo" alt="logo" />
        <button onClick={AddCard}>add to trello board</button>
      </header>
    </div>
  );
}

export default App;
