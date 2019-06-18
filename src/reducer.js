import { ADD_TWEET, DELETE_TWEET, EDIT_VALUE, RESET } from './actions'

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

const emojiList = [
  '😀',
  '🦐',
  '🐬',
  '🐧',
  '🐣',
]

const initialState = {
  user_name: 'やすだ',
  tweets: loadTweets(),
  emojiList,
  form: {
    text: '',
    avatar: null,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      }
    case DELETE_TWEET:
      return {
        ...state,
        tweets: state.tweets
          .filter(o => o.ts !== action.payload.ts)
      }
    case EDIT_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value,
        },
      }
    case RESET:
      return {
        ...state,
        form: {
          text: '',
          avatar: null,
        }
      }
    default:
      return state
  }
}
