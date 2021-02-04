import { DefaultTheme } from 'styled-components'

const colors = {
  // Light - default
  black: '#232323',
  blue: '#008CFF',
  green: '#08C988',
  lightGreen: '#E9FFF2',
  grey: '#4F4F4F',
  lightGrey: '#BDBDBD',
  white: '#FFFFFF',
  red: '#F76345',

  // Dark
  darkGrey: '#202125',
  darkerGrey: '#16171b',
}

const base = {
  drawer: colors.lightGreen,
  background: colors.white,
  logo: colors.green,
  header: colors.green,
  subheader: colors.grey,
  button: colors.green,
  delete: colors.red,
  classname: colors.green,
  inactive: colors.grey,
  overlay: colors.white,
  text: colors.grey,
  lightText: colors.white,
  alert: colors.green,
  border: colors.lightGrey,
  fileTitle: colors.grey,
  scrollbar: colors.grey,
}

export const light: DefaultTheme = {
  colors: base,
}

export const dark: DefaultTheme = {
  colors: {
    ...base,
    drawer: colors.darkGrey,
    background: colors.darkerGrey,
    fileTitle: colors.white,
    header: colors.white,
    inactive: colors.darkGrey,
  },
}
