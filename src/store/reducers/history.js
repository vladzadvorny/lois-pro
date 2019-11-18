import { SET_HISTORY } from '../types'

const initialState = {
  income: [],
  expenses: [],
  incomeCanceled: [],
  expensesCanceled: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return action.payload

    default:
      return state
  }
}
