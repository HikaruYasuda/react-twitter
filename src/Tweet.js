import React from 'react'

export default class Tweet extends React.Component {
  render() {
    const { tweet } = this.props

    return (
      <div className="tweet">
        <time>{ new Date(tweet.ts).toLocaleString() }</time>
        <p>{ tweet.message }</p>
      </div>
    )
  }
}
