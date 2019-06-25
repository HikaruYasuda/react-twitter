import React from 'react';
import Header from './Header'
import './App.scss';
import 'rodal/lib/rodal.css'
import Timeline from './Timeline'
import ProfileModal from './ProfileModal'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="container">
          <Timeline />
        </main>

        <ProfileModal/>
      </div>
    );
  }
}

export default App;
