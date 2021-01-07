import { AnyAction } from 'redux'
import { SET_FILES, RESET, REMOVE_FILE } from '../types/files'

const initialState = {
  files: [],
}

export const files = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_FILES: {
      return {
        files: [...state.files, ...action.payload.content],
      }
    }
    case REMOVE_FILE: {
      const id = action.payload.content
      return {
        files: state.files.filter((file: any) => file.id !== id),
      }
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
