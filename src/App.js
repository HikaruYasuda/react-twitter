import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="container">
        <div className="main-column">
          <Timeline/>
        </div>

        <aside className="sidebar-column">
          <div className="trends">
            <h3>Trends</h3>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
