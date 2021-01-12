export const SET_FILES = 'SET_FILES'
export const REMOVE_FILE = 'REMOVE_FILE'
export const SET_STYLES = 'SET_STYLE'
export const REMOVE_STYLE = 'REMOVE_STYLE'
export const RESET = 'RESET'
export const SET_CLASSNAMES = 'SET_CLASSNAMES'

export type FileProps = {
  name: string
  path: string
  id: string
}

export type ClassnameProps = {
  name: string
  id: string
}
