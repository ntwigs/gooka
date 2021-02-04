import * as React from 'react'
import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../../theme'

type ThemeContextProps = {
  toggleLight: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

type AlertProviderProps = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: AlertProviderProps) => {
  const [isLight, setLight] = useState(false)

  const toggleLight = () => setLight(!isLight)

  return (
    <ThemeContext.Provider value={{ toggleLight }}>
      <ThemeProvider theme={isLight ? light : dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
