import {
  RESET,
  SET_FILES,
  REMOVE_FILE,
  REMOVE_STYLE,
  SET_STYLES,
  FileProps,
} from '../types/files'

export const setFiles = (files: FileProps[]) => ({
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

export const setStyles = (styles: FileProps[]) => ({
  type: SET_STYLES,
  payload: {
    content: styles,
  },
})

export const removeStyle = (id: string) => ({
  type: REMOVE_STYLE,
  payload: { content: id },
})

export const resetStyle = () => ({
  type: RESET,
})
