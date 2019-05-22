import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item'
import PostForm from './PostForm'

/**
 * Load tweets from LocalStorage.
 * @return {{message: String, ts: Date}[]}
 */
function loadTweets() {
  try {
    const tweets = JSON.parse(localStorage.getItem('tweets') || '[]')
    for (const tweet of tweets) {
      tweet.ts = new Date(tweet.ts)
    }
    return tweets
  } catch (e) {
    return []
  }
}

/**
 * Save tweets to LocalStorage.
 * @param {{message: String, ts: Date}[]} tweets
 */
function saveTweets(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

class App extends React.Component {
  state = {
    time: new Date().toLocaleString(),
    items: loadTweets(),
  }

  handleSubmit = (newItem) => {
    const { items } = this.state

    const newItems = [newItem, ...items]

    this.setState({
      items: newItems,
    })

    saveTweets(newItems)
  }

  handleDelete = (item) => {
    // 削除したい項目を除いた余った項目リスト
    const newItems = this.state.items
      .filter(o => {
        // o ... 検査する項目
        // o.ts ... 検索する項目のキー
        // ts ... 削除したい項目のキー
        return o.ts !== item.ts
      })

    this.setState({
      items: newItems
    })

    saveTweets(newItems)
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
        </header>
        <div>
          <PostForm onSubmit={this.handleSubmit} />

          { this.state.items.map((item) => (
            <Item
              key={item.ts}
              item={item}
              onDelete={this.handleDelete}
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
