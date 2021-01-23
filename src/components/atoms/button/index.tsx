import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'

type StyledButtonProps = {
  apperance?: 'warning' | 'standard'
  disabled?: boolean
}

const getBackground = ({ apperance, theme }: any) => {
  if (!apperance) {
    return theme.colors.green
  }

  return theme.colors.red
}

export const StyledButton = styled.button<StyledButtonProps>`
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
`

type ButtonProps = {
  children: ReactNode
  onClick: () => void
} & StyledButtonProps

export const Button = ({
  children,
  apperance,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <motion.div
      variants={variants(0)}
      animate={disabled ? 'disabled' : 'animate'}
      whileHover={disabled ? 'disabled' : 'hover'}
      whileTap={disabled ? 'disabled' : 'click'}
    >
      <StyledButton apperance={apperance} disabled={disabled} onClick={onClick}>
        {children}
      </StyledButton>
    </motion.div>
  )
}
