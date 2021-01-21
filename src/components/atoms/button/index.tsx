import styled, { DefaultTheme, useTheme } from 'styled-components'

type ButtonProps = {
  apperance?: 'warning' | 'standard'
  disabled?: boolean
}

const getBackground = ({ apperance, theme }: any) => {
  if (!apperance) {
    return theme.colors.green
  }

  return theme.colors.red
}

export const Button = styled.button<ButtonProps>`
  background: ${getBackground};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  font-size: 16px;
  width: 105px;
  height: 45px;
  font-weight: 900;
  border: none;
  outline: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`
