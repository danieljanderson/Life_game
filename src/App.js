import React from 'react';
import NewPlayerForm from './Components/NewPlayerForm';
import PlayerStatsDisplay from './Components/PlayerStatsDisplay';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';

function App({ children }) {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        {children}
        <NewPlayerForm></NewPlayerForm>
        <PlayerStatsDisplay></PlayerStatsDisplay>
      </LocalizationProvider>
    </div>
  );
}

export default App;
