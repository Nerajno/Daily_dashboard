import React from 'react'
import './App.css';
import { Button } from '@material-ui/core';


//Imported Components
import Weather from './components/Weather';
import News from './components/News';
import Iteniary from './components/Iteniary';
import Header from './components/Header';




function App() {
  return (
    <main>
      <Header/>
      <Button> Test</Button>
      <Weather/>
      <section>
          <div>
            <h3>Latest Headlines</h3>
          <News/>
          </div>
          <div>
            <h3> Today's Agenda</h3>
          <Iteniary/>
          </div>
      </section>
    </main>
  );
}

export default App;
