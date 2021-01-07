import { SET_STYLE, RESET, REMOVE_STYLE } from '../types/style'

type StyleProps = {
  name: string
  path: string
  id: string
}

export const setStyle = (content: StyleProps) => ({
  type: SET_STYLE,
  payload: {
    content,
  },
})

export const removeStyle = () => ({
  type: REMOVE_STYLE,
})

export const resetStyle = () => ({
  type: RESET,
})
