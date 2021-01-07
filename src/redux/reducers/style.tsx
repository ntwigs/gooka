import { AnyAction } from 'redux'
import { SET_STYLE, RESET, REMOVE_STYLE } from '../types/style'

const initialState = {
  style: { name: '', path: '', id: '' },
}

export const style = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_STYLE: {
      return {
        style: action.payload.content,
      }
    }
    case REMOVE_STYLE: {
      return initialState
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
