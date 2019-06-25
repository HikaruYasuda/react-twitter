import { TOGGLE_PROFILE_MODAL } from '../actions'

export default (state = { visibility: false }, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL:
      return {
        ...state,
        visibility: action.payload,
      }
    default:
      return state
  }
}
