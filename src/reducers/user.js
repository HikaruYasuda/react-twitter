import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from '../actions'

const initialState = {
  fetching: false,
  lastUpdatedAt: null,
  profile: {},
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        profile: action.payload,
        lastUpdatedAt: action.date,
      }
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
