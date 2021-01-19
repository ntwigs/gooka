import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/logo'

const LogoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 0 40px;
`

const Name = styled(motion.p)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  font-size: 34px;
  margin-left: 10px;
`

export const LogoHeader = React.forwardRef((_, ref) => {
  return (
    <LogoHeaderContainer>
      <Logo
        ref={ref as any}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{
          type: 'spring',
          delay: 0.25,
          mass: 2,
        }}
      />
      <Name
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ type: 'spring', delay: 0.5, mass: 2 }}
      >
        Gooka
      </Name>
    </LogoHeaderContainer>
  )
})
