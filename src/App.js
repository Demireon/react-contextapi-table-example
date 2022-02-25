import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SmartButton from './Components/SmartButton.js'
import SmartList from './Components/SmartList.js'
import OutputContext from './Contexts/OutputContext.js'
import './App.css';


function App() {
  const [outputText, setOutputText] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <OutputContext.Provider value={{ outputText, setOutputText }}>
              <SmartButton></SmartButton>
            </OutputContext.Provider>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} justify='center' alignItems='center' >
            <Grid item xs={2}></Grid>
            <OutputContext.Provider value={{ outputText, setOutputText }}>
              <SmartList></SmartList>
            </OutputContext.Provider>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;