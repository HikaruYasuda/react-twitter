import { ADD_TWEET, DELETE_TWEET, EDIT_VALUE, RESET } from './actions'
import { combineReducers } from 'redux'

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

const INITIAL_EMOJI_LIST = [
  '😀',
  '🦐',
  '🐬',
  '🐧',
  '🐣',
]

const user = (state = { name: 'やすだ' }, action) => {
  return state
}

const emojiList = (state = INITIAL_EMOJI_LIST, action) => {
  return state
}

const initialTweets = loadTweets()
const tweets = (state = initialTweets, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return [action.payload, ...state]
    case DELETE_TWEET:
      return state.filter(o => o.ts !== action.payload.ts)
    default:
      return state
  }
}

const form = (state = {
  text: '',
  avatar: null,
}, action) => {
  switch (action.type) {
    case EDIT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      }
    case RESET:
      return {
        text: '',
        avatar: null,
      }
    default:
      return state
  }
}

export default combineReducers({
  user,
  tweets,
  emojiList,
  form,
})
