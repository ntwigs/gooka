import 'styled-components'

type ThemeColors = {
  drawer: string
  background: string
  logo: string
  header: string
  subheader: string
  button: string
  delete: string
  classname: string
  inactive: string
  overlay: string
  text: string
  lightText: string
  alert: string
  border: string
  fileTitle: string
  scrollbar: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors
  }
}
