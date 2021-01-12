import * as React from 'react'
import { useState } from 'react'
import { FadeIn } from 'src/atoms/fade-in'
import styled, { keyframes } from 'styled-components'
import { Remove } from '../../atoms/remove'

type ContainerProps = {
  isRemoved?: boolean
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: ${({ theme, isRemoved }) =>
    isRemoved ? theme.colors.grey : theme.colors.blue};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  transition: all 250ms;
  transform: scale(1);

  &:hover {
    cursor: pointer;
    transition: all 150ms;
    transform: scale(1.1);
  }
`

const Classname = styled.p<ContainerProps>`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 18px;
  text-decoration: ${({ isRemoved }) => (isRemoved ? 'line-through' : 'none')};
`

type UnnecessaryClassnameProps = {
  name: string
  id: string
  delay: number
}

export const UnnecessaryClassname = ({
  name,
  delay,
}: UnnecessaryClassnameProps) => {
  const [isRemoved, setRemoved] = useState(false)
  const remove = () => setRemoved(!isRemoved)

  return (
    <FadeIn delay={delay}>
      <Container isRemoved={isRemoved} onClick={remove}>
        <Classname isRemoved={isRemoved}>{name}</Classname>
        <Remove isRemoved={isRemoved} />
      </Container>
    </FadeIn>
  )
}
