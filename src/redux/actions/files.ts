import { File } from '../../../common/types/file'
import {
  RESET,
  SET_FILES,
  REMOVE_FILE,
  REMOVE_STYLE,
  SET_STYLES,
  ClassnameProps,
  SET_CLASSNAMES,
  RESET_CLASSNAMES,
} from '../types/files'

export const setFiles = (files: File[]) => ({
  type: SET_FILES,
  payload: {
    content: files,
  },
})

export const removeFile = (id: string) => ({
  type: REMOVE_FILE,
  payload: { content: id },
})

export const resetFiles = () => ({
  type: RESET,
})

export const setStyles = (styles: File[]) => ({
  type: SET_STYLES,
  payload: {
    content: styles,
  },
})

export const removeStyle = (id: string) => ({
  type: REMOVE_STYLE,
  payload: { content: id },
})

export const setClassnames = (classnames: ClassnameProps[]) => ({
  type: SET_CLASSNAMES,
  payload: {
    content: classnames,
  },
})

export const resetClassnames = () => ({
  type: RESET_CLASSNAMES,
})
