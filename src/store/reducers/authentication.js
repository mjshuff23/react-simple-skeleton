import { SET_USER } from '../actions/authentication'

const initialState = {
  userId: '',
  username: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
       return { ...state, username: action.username };
    default:
      return state
  }
}
