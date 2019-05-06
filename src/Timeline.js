import React from 'react'
import Tweet from './Tweet'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        { message: 'Reactで作る', ts: Date.now() - 30000 },
        { message: 'Hello world!', ts: Date.now() - 50000 },
      ],
    }
  }

  render() {
    const { tweets } = this.state

    return (
      <section className="timeline">
        <h2>Home</h2>

        <div className="new-post">
          <button type="button" onClick={ () => {
            const tweet = {
              message: 'メッセージ',
              ts: Date.now(),
            }
            this.setState({ tweets: [ tweet, ...tweets ] })
          } }>追加</button>
        </div>

        { tweets.map(tweet => (
          <Tweet tweet={ tweet } key={ tweet.ts } />
        )) }
      </section>
    )
  }
}
