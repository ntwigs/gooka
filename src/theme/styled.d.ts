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
  background: string
  title: string
  subtitle: string
  inactive: string
  active: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors
  }
}
