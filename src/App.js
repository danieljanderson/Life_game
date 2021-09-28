import React from 'react';
import NewPlayerForm from './Components/NewPlayerForm';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <NewPlayerForm></NewPlayerForm>
      </LocalizationProvider>
    </div>
  );
}

export default App;
