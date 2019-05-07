import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item'

class App extends React.Component {
  state = {
    time: new Date().toLocaleString(),
    items: [
      'a',
      'b',
      'c',
    ]
  }

  componentDidMount() {
    // アローFunction
    // 関数が定義されているブロックのthisが使える
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React<br />
            { this.state.time }<br/>
            { this.state.items.map(item => {
              return <Item message={item}/>
            }) }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
