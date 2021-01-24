import { AnyAction } from 'redux'
import {
  SET_FILES,
  RESET,
  REMOVE_FILE,
  REMOVE_STYLE,
  SET_STYLES,
  SET_CLASSNAMES,
  SET_IS_LOADING,
} from '../types/files'
import { File } from '../../../common/types/file'

const initialState = {
  files: [],
  styles: [],
  classnames: [],
  isLoading: false,
}

export const files = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_FILES: {
      return {
        ...state,
        files: [...state.files, ...action.payload.content],
      }
    }
    case REMOVE_FILE: {
      const id = action.payload.content
      return {
        ...state,
        files: state.files.filter((file: File) => file.id !== id),
      }
    }
    case SET_STYLES: {
      const [style] = action.payload.content

      return {
        ...state,
        styles: [style],
      }
    }
    case REMOVE_STYLE: {
      const id = action.payload.content
      return {
        ...state,
        styles: state.styles.filter((style: File) => style.id !== id),
      }
    }
    case SET_CLASSNAMES: {
      return {
        ...state,
        classnames: action.payload.content,
      }
    }
    case SET_IS_LOADING: {
      const isLoading = action.payload.content
      return {
        ...state,
        isLoading,
      }
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
