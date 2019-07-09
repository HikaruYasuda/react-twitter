import {
  FETCH_QIITA_POST_FAILURE,
  FETCH_QIITA_POST_SUCCESS,
  FETCH_QIITA_POST_REQUEST,
  SEARCH_QIITA_POSTS_REQUEST,
  SEARCH_QIITA_POSTS_SUCCESS,
  SEARCH_QIITA_POSTS_FAILURE,
} from '../actions'

const initialState = {
  loading: false,
  searchParams: null,
  posts: [],
  post: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QIITA_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        searchParams: action.params,
      }
    case SEARCH_QIITA_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        lastUpdatedAt: action.date,
      }
    case SEARCH_QIITA_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case FETCH_QIITA_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_QIITA_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      }
    case FETCH_QIITA_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
