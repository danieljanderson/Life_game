import { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import PlayerStatsDisplay from './PlayerStatsDisplay';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { PersonProvider } from '../context/PersonContext';

function LifeGame({ children }) {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        {children}
        <PersonProvider>
          <NewPlayerForm></NewPlayerForm>
          <PlayerStatsDisplay></PlayerStatsDisplay>
        </PersonProvider>
      </LocalizationProvider>
    </div>
  );
}

export default LifeGame;
