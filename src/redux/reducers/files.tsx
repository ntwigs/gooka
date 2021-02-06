import { AnyAction } from 'redux'
import {
  SET_FILES,
  RESET,
  REMOVE_FILE,
  REMOVE_STYLE,
  SET_STYLES,
  RESET_SELECTORS,
  SET_SELECTORS,
} from '../types/files'
import { File } from '../../../common/types/file'
import { hasElements } from '../../utils/has-elements'

const initialState = {
  files: [],
  styles: [],
  selectors: [],
  hasUnusedSelectors: false,
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
    case SET_SELECTORS: {
      const hasUnusedSelectors = hasElements(action.payload.content)

      return {
        ...state,
        selectors: action.payload.content,
        hasUnusedSelectors,
      }
    }
    case RESET_SELECTORS: {
      return {
        ...state,
        selectors: [],
      }
    }
    case RESET: {
      return initialState
    }
    default:
      return state
  }
}
