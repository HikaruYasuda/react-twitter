// Action Types
export const ADD_TWEET = 'ADD_TWEET'
export const DELETE_TWEET = 'DELETE_TWEET'

// Action Creators
export const addTweet = (newTweet) => {
  return {type: ADD_TWEET, payload: newTweet}
}

export const deleteTweet = (tweet) => {
  return {type: DELETE_TWEET, payload: tweet}
}
