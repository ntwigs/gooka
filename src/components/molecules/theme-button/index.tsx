import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './context'

export const StyledThemeButton = styled.div`
  background: red;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  align-self: center;
`

export const ThemeButton = () => {
  const { toggleLight } = useContext(ThemeContext)

  return <StyledThemeButton onClick={toggleLight} />
}
