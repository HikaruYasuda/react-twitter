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
      message: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    const { tweets, message } = this.state

    if (!message.trim()) {
      return
    }

    const tweet = {
      message,
      ts: Date.now(),
    }

    this.setState({
      tweets: [tweet, ...tweets],
      message: '',
    })
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    const { tweets, message } = this.state

    return (
      <section className="timeline">
        <h2>Home</h2>

        <section className="new-post">
          <form onSubmit={ this.onSubmit }>
            <textarea rows={4} value={ message } onChange={ this.onMessageChange } />
            <button>投稿</button>
          </form>
        </section>

        { tweets.map(tweet => (
          <Tweet tweet={ tweet } key={ tweet.ts } />
        )) }
      </section>
    )
  }
}
