import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/logo'
import { variants } from '../../../animations/animation'
import logo from '../../../assets/gooka_150px.png'
import { openLink } from '../../../utils/open-link'

const LogoHeaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 0 40px;
  transform-origin: 100px center;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: -15px;
`

const Name = styled(motion.p)`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 900;
  font-size: 34px;
  margin-left: 10px;
`

export const LogoHeader = () => {
  return (
    <LogoHeaderContainer
      onClick={openLink('https://github.com/ntwigs/gooka')}
      whileHover={{ opacity: 0.5 }}
    >
      <Logo
        variants={variants(1)}
        animate="animate"
        initial="initial"
        src={logo}
      />
      <Name variants={variants(1.1)} animate="animate" initial="initial">
        Gooka
      </Name>
    </LogoHeaderContainer>
  )
}
