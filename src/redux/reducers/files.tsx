import { AnyAction } from 'redux'
import {
  SET_FILES,
  RESET,
  REMOVE_FILE,
  REMOVE_STYLE,
  SET_STYLES,
  SET_CLASSNAMES,
} from '../types/files'

const initialState = {
  files: [],
  styles: [],
  classnames: [],
}

export const files = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_FILES: {
      console.log('', action.payload.content)
      return {
        ...state,
        files: [...state.files, ...action.payload.content],
      }
    }
    case REMOVE_FILE: {
      const id = action.payload.content
      return {
        ...state,
        files: state.files.filter((file: any) => file.id !== id),
      }
    }
    case SET_STYLES: {
      return {
        ...state,
        styles: action.payload.content,
      }
    }
    case REMOVE_STYLE: {
      const id = action.payload.content
      return {
        ...state,
        styles: state.styles.filter((style: any) => style.id !== id),
      }
    }
    case SET_CLASSNAMES: {
      return {
        ...state,
        classnames: action.payload.content,
      }
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
