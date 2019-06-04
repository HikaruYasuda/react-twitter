import React from 'react';
import './App.css';
import Tweet from './Tweet'
import PostForm from './PostForm'
import { connect } from 'react-redux'

/**
 * Save tweets to LocalStorage.
 * @param {{message: String, ts: Date}[]} tweets
 */
function saveTweets(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

class Timeline extends React.Component {
  handleSubmit = (newTweet) => {
    const { tweets } = this.state

    const newTweets = [newTweet, ...tweets]

    this.setState({
      tweets: newTweets,
    })

    saveTweets(newTweets)
  }

  handleDelete = (tweet) => {
    // 削除したい項目を除いた余った項目リスト
    const newTweets = this.state.tweets
      .filter(o => o.ts !== tweet.ts)

    this.setState({
      tweets: newTweets
    })

    saveTweets(newTweets)
  }

  render() {
    return (
      <div className="timeline">
        <h2>Home</h2>

        <PostForm onSubmit={this.handleSubmit} />

        { this.props.tweets.map((tweet) => (
          <Tweet
            key={tweet.ts}
            item={tweet}
            onDelete={this.handleDelete}
          />
        )) }
      </div>
    );
  }
}

// Storeのstate(状態ツリー)の値をコンポーネントで使う項目としてマッピングする
const mapState = (state) => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapState)(Timeline)
