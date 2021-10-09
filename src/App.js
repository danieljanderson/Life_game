import React from 'react';
import LifeGame from './Components/LifeGame';
import './App.css';

function App({ children }) {
  return (
    <div className="App">
      <LifeGame></LifeGame>
    </div>
  );
}

export default App;
