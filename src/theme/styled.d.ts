import 'styled-components'

type ThemeColors = {
  green: string
  lightGreen: string
  red: string
  blue: string
  white: string
  grey: string
  black: string
  light: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    light: ThemeColors
    dark: ThemeColors
  }
}
