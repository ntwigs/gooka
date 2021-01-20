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
  padding: 12px 19px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`
