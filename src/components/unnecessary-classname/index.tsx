import * as React from 'react'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Remove } from '../remove'

type ContainerProps = {
  isRemoved?: boolean
}

const fadeIn = keyframes`
  from {
    transform: translateY(25px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

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

type FadeInProps = {
  delay: number
}

const FadeIn = styled.div<FadeInProps>`
  opacity: 0;
  animation: ${fadeIn} 500ms cubic-bezier(0.64, 0.57, 0.67, 1.53) forwards;
  animation-delay: ${({ delay }) => delay}ms;
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
    <FadeIn delay={delay * 100}>
      <Container isRemoved={isRemoved} onClick={remove}>
        <Classname isRemoved={isRemoved}>{name}</Classname>
        <Remove isRemoved={isRemoved} />
      </Container>
    </FadeIn>
  )
}
