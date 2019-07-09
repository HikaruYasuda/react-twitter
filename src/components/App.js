import React from 'react'
import Header from './Header'
import './App.scss'
import 'rodal/lib/rodal.css'
import ProfileModal from './ProfileModal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import QiitaLayout from './QiitaLayout'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/qiita" component={ QiitaLayout } />
          </Switch>

          <ProfileModal/>
        </div>
      </Router>
    );
  }
}

export default App;
