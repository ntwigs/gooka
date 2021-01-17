import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/logo'

const LogoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 0 40px;
`

const Name = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  font-size: 34px;
  margin-left: 10px;
`

export const LogoHeader = () => {
  return (
    <LogoHeaderContainer>
      <Logo />
      <Name>Gooka</Name>
    </LogoHeaderContainer>
  )
}
