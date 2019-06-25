import { ADD_TWEET, DELETE_TWEET } from '../actions'

/**
 * Load tweets from LocalStorage.
 * @return {{message: String, ts: Date}[]}
 */
function loadTweets() {
  try {
    const tweets = JSON.parse(localStorage.getItem('tweets') || '[]')
    for (const tweet of tweets) {
      tweet.ts = new Date(tweet.ts)
    }
    return tweets
  } catch (e) {
    return []
  }
}

const initialTweets = loadTweets()
export default (state = initialTweets, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return [action.payload, ...state]
    case DELETE_TWEET:
      return state.filter(o => o.ts !== action.payload.ts)
    default:
      return state
  }
}
