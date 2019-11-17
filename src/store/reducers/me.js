import { SET_ME, INCREMENT_BALANCE, SET_CHECKSTATUS } from '../types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ME:
      return action.payload

    case INCREMENT_BALANCE:
      return {
        ...state,
        balance: parseFloat(state.balance) + action.payload
      }

    case SET_CHECKSTATUS:
      return {
        ...state,
        checkStatus: action.payload
      }

    default:
      return state
  }
}
