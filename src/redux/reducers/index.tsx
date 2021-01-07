import { combineReducers } from 'redux'
import { files } from './files'
import { style } from './style'

export const rootReducer = combineReducers({ files, style })
