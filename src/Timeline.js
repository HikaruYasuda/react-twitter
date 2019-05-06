import React from 'react'
import Tweet from './Tweet'
import PostForm from './PostForm'

export default class Timeline extends React.Component {
  state = {
    tweets: [
      { message: 'Reactで作る', ts: Date.now() - 30000 },
      { message: 'Hello world!', ts: Date.now() - 50000 },
    ],
  }

  onPostTweet = (tweet) => {
    this.setState({ tweets: [ tweet, ...this.state.tweets ] })
  }

  render() {
    const { tweets } = this.state

    return (
      <section className="timeline">
        <h2>Home</h2>

        <section className="new-post">
          <PostForm onSubmit={ this.onPostTweet } />
        </section>

        { tweets.map(tweet => (
          <Tweet tweet={ tweet } key={ tweet.ts } />
        )) }
      </section>
    )
  }
}
