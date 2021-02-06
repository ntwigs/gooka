import { motion } from 'framer-motion'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { Animator } from '../../atoms/animator'
import { Remove } from '../../atoms/remove'

type ContainerProps = {
  isRemoved?: boolean
}

const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: ${({ theme, isRemoved }) =>
    isRemoved ? theme.colors.inactive : theme.colors.selector};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;
  cursor: pointer;
  transition: 150ms background;
`

const Selector = styled.p<ContainerProps>`
  color: ${(props) => props.theme.colors.lightText};
  font-weight: bold;
  font-size: 18px;
  text-decoration: ${({ isRemoved }) => (isRemoved ? 'line-through' : 'none')};
`

type UnnecessarySelectorProps = {
  name: string
}

export const UnnecessarySelector = ({ name }: UnnecessarySelectorProps) => {
  const [isRemoved, setRemoved] = useState(false)
  const toggleRemoved = () => setRemoved(!isRemoved)

  return (
    <Animator variants={variants()}>
      <Container
        isRemoved={isRemoved}
        whileHover="largeHover"
        whileTap="largeClick"
        variants={variants()}
        onClick={toggleRemoved}
      >
        <Selector isRemoved={isRemoved}>{name}</Selector>
        <Remove isRemoved={isRemoved} />
      </Container>
    </Animator>
  )
}
