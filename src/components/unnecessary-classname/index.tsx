import * as React from 'react'
import styled from 'styled-components'
import { Remove } from '../remove'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`

const Classname = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 18px;
`

type UnnecessaryClassnameProps = {
  name: string
}

export const UnnecessaryClassname = ({ name }: UnnecessaryClassnameProps) => {
  return (
    <Container>
      <Classname>{name}</Classname>
      <Remove />
    </Container>
  )
}
