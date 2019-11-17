import { combineReducers } from 'redux'

import { RESET_STORE } from '../types'
import me from './me'
import app from './app'
import myTasks from './myTasks'

const reducers = combineReducers({
  me,
  app,
  myTasks
})

const root = (state, action) => {
  if (action.type === RESET_STORE) {
    // eslint-disable-next-line
    state = undefined
  }

  return reducers(state, action)
}

export default root
