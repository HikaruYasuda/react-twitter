import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'

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

const initialState = {
  user_name: 'やすだ',
  tweets: loadTweets(),
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      }
    case 'DELETE_TWEET':
      return {
        ...state,
        tweets: state.tweets
          .filter(o => o.ts !== action.payload.ts)
      }
    default:
      return state
  }
}
const store = createStore(
  reducer,
  initialState,
  compose(process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f)
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
