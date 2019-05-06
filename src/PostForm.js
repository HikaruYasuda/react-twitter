import React from 'react'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    const { message } = this.state
    const { onSubmit } = this.props

    if (!message.trim()) {
      return
    }

    onSubmit({
      message,
      ts: Date.now(),
    })

    this.setState({
      message: '',
    })
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    const { message } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <textarea rows={4} value={ message } onChange={ this.onMessageChange } />
        <button>投稿</button>
      </form>
    )
  }
}
