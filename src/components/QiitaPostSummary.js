import React from 'react'
import { Link } from 'react-router-dom'

export default ({ post }) => {
  const {
    id,
    title,
    created_at,
    user: { name: user_name, id: user_id, profile_image_url },
  } = post

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={ profile_image_url } alt={ user_name || user_id } width="80"/>
      </div>
      <div className="tweet-body">
        <h5>
          <span>{ user_name || 'No Name' }</span>
          <time className="text-muted">・{ (new Date(created_at)).toLocaleString() }</time>
        </h5>
        <Link to={ `/qiita/${ id }` }>
          { title }
        </Link>
      </div>
    </div>
  )
}
