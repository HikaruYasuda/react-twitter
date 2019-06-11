import React from 'react';
import Tweet from './Tweet'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { deleteTweet } from '../actions'

/**
 * Save tweets to LocalStorage.
 * @param {{message: String, ts: Date}[]} tweets
 */
function saveTweets(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

class Timeline extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    saveTweets(this.props.tweets)
  }

  render() {
    return (
      <div className="timeline">
        <h2>Home</h2>

        <PostForm/>

        { this.props.tweets.map((tweet) => (
          <Tweet
            key={tweet.ts}
            item={tweet}
            onDelete={this.props.deleteTweet}
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
const mapDispatch = (dispatch) => {
  return {
    deleteTweet: (tweet) => {
      dispatch(deleteTweet(tweet))
    }
  }
}

export default connect(mapState, mapDispatch)(Timeline)
