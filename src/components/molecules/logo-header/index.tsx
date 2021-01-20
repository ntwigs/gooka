import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/logo'
import { variants } from '../../../animations/animation'

const LogoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 0 40px;
`

const Name = styled(motion.p)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 900;
  font-size: 34px;
  margin-left: 10px;
`

export const LogoHeader = () => {
  return (
    <LogoHeaderContainer>
      <Logo variants={variants(1)} animate={'animate'} initial={'initial'} />
      <Name variants={variants(1.1)} animate={'animate'} initial={'initial'}>
        Gooka
      </Name>
    </LogoHeaderContainer>
  )
}
