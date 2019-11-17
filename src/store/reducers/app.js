/* eslint-disable prefer-object-spread */
import { SET_USE_WEB_LINKS } from '../types'

const initialState = {
  useWebLinks: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USE_WEB_LINKS:
      return {
        ...state,
        useWebLinks: action.payload
      }

    default:
      return state
  }
}
