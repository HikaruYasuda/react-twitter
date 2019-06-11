import React from 'react';
import Header from './Header'
import './App.scss';
import Timeline from './Timeline'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="container">
          <Timeline />
        </main>
      </div>
    );
  }
}

export default App;
