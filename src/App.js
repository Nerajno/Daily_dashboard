import React from 'react'
import './App.css';

//Imported Components
import Weather from './components/Weather';
import News from './components/News';
import Iteniary from './components/Iteniary';




function App() {
  return (
    <main>
      <h1> Greetings, User</h1>
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
