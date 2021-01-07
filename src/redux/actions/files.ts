import { RESET, SET_FILES, REMOVE_FILE } from '../types/files'

export const setFiles = (
  files: { name: string; path: string; id: string }[],
) => ({
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
