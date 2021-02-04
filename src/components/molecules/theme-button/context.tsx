import * as React from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../../theme'
import { storage } from '../../../utils/localstorage'

type ThemeContextProps = {
  toggleLight: () => void
  isLight: boolean
}

export const ThemeContext = createContext({} as ThemeContextProps)

type AlertProviderProps = {
  children: ReactNode
}

const IS_LIGHT = 'isLight'

export const ThemeContextProvider = ({ children }: AlertProviderProps) => {
  const defaultMode = storage.get<boolean>({
    item: IS_LIGHT,
    fallback: false,
  })

  const isLightDefault = JSON.parse(`${defaultMode}`)

  const [isLight, setLight] = useState(isLightDefault)

  const toggleLight = () => setLight(!isLight)

  useEffect(() => {
    storage.save({ item: IS_LIGHT, value: `${isLight}` })
  }, [isLight])

  return (
    <ThemeContext.Provider value={{ toggleLight, isLight }}>
      <ThemeProvider theme={isLight ? light : dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
