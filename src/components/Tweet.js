import React from 'react'
import PropTypes from 'prop-types'

export default class Tweet extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      message: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      username: PropTypes.string,
      ts: PropTypes.any.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onDelete: () => {},
  }

  handleClickDelete = () => {
    this.props.onDelete(this.props.item)
  }

  render() {
    const { item } = this.props
    return (
      <div className="tweet">
        <div className="tweet-avatar">
          <span role="img">{ item.avatar || '😄' }</span>
        </div>
        <div className="tweet-body">
          <h5>
            <span>{ item.username || 'No Name' }</span>
            <time className="text-muted">・{ item.ts.toLocaleString() }</time>
          </h5>
          <p>{ item.message }</p>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={this.handleClickDelete}
          >削除</button>
        </div>
      </div>
    )
  }
}
