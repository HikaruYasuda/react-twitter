import { EDIT_VALUE, RESET } from '../actions'

export default (state = {
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
