import React from 'react'
import { connect } from 'react-redux'
import { addTweet } from '../actions'
const emojiList = [
  '😀',
  '🦐',
  '🐬',
  '🐧',
  '🐣',
]

class PostForm extends React.Component {
  state = {
    text: '',
    avatar: emojiList[0],
    emojiList,
  }

  handleEdit = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleChangeAvatar = (e) => {
    this.setState({
      avatar: e.target.value
    })
  }

  handleClick = () => {
    const { text, avatar } = this.state

    const newItem = {
      ts: new Date(),
      message: text,
      avatar,
    }

    this.props.addTweet(newItem)

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
        <div className="form-inline">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={this.handleClick}
          >投稿</button>
          <select
            className="form-control form-control-sm"
            onChange={this.handleChangeAvatar}
            value={this.avatar}
          >
            {this.state.emojiList.map(emoji => (
              <option value={emoji}>{emoji}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = (dispatch) => {
  return {
    addTweet: (newTweet) => {
      dispatch(addTweet(newTweet))
    },
  }
}

export default connect(mapState, mapDispatch)(PostForm)
