import React from 'react'

export default class Tweet extends React.Component {

  handleClickDelete = () => {
    this.props.onDelete(this.props.item)
  }

  render() {
    const { item } = this.props
    return (
      <div className="tweet">
        <time>{ item.ts.toLocaleString() }</time>
        <br/>
        { item.message }
        <br/>
        <button type="button" onClick={this.handleClickDelete}>削除</button>
      </div>
    )
  }
}
