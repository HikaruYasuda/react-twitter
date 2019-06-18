import React from 'react'
import { connect } from 'react-redux'
import { addTweet, editValue, reset } from '../actions'

export class PostForm extends React.Component {
  handleEdit = (e) => {
    this.props.editValue('text', e.target.value)
  }

  handleChangeAvatar = (e) => {
    this.props.editValue('avatar', e.target.value)
  }

  handleClick = () => {
    const { emojiList, form } = this.props
    const { text, avatar } = form

    const newItem = {
      ts: new Date(),
      message: text,
      avatar: avatar || emojiList[0],
    }

    this.props.addTweet(newItem)

    this.props.reset()
  }

  render() {
    const { form, emojiList } = this.props
    const { text, avatar } = form

    return (
      <div className="new-post">
        <textarea
          className="form-control"
          onChange={this.handleEdit}
          value={text}
        />
        <div className="form-inline">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={this.handleClick}
          >投稿</button>
          <select
            className="form-control form-control-sm"
            onChange={this.handleChangeAvatar}
            value={avatar || emojiList[0]}
          >
            {emojiList.map(emoji => (
              <option value={emoji} key={emoji}>{emoji}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    emojiList: state.emojiList,
    form: state.form
  }
}
const mapDispatch = (dispatch) => {
  return {
    addTweet: (newTweet) => {
      dispatch(addTweet(newTweet))
    },
    editValue: (name, value) => {
      dispatch(editValue(name, value))
    },
    reset: () => {
      dispatch(reset())
    },
  }
}

export default connect(mapState, mapDispatch)(PostForm)
