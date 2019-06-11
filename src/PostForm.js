import React from 'react'

export default class PostForm extends React.Component {
  state = {
    text: ''
  }

  handleEdit = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleClick = () => {
    const { text } = this.state

    const newItem = {
      ts: new Date(),
      message: text
    }

    this.props.onSubmit(newItem)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="new-post">
        <textarea
          className="form-control"
          onChange={this.handleEdit}
          value={this.state.text}/>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={this.handleClick}
        >投稿</button>
      </div>
    )
  }
}
