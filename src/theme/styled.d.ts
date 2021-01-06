import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string
      red: string
      blue: string
      white: string
      grey: string
      black: string
      light: string
    }
  }
}
