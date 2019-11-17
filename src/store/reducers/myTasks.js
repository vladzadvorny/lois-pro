import { SET_MY_TASKS } from '../types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_TASKS:
      return action.payload

    default:
      return state
  }
}
