import { motion } from 'framer-motion'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { Remove } from '../../atoms/remove'

type ContainerProps = {
  isRemoved?: boolean
}

const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: ${({ theme, isRemoved }) =>
    isRemoved ? theme.colors.inactive : theme.colors.classname};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;
  cursor: pointer;
  transition: 150ms background;
`

const Classname = styled.p<ContainerProps>`
  color: ${(props) => props.theme.colors.lightText};
  font-weight: bold;
  font-size: 18px;
  text-decoration: ${({ isRemoved }) => (isRemoved ? 'line-through' : 'none')};
`

type UnnecessaryClassnameProps = {
  name: string
}

export const UnnecessaryClassname = ({ name }: UnnecessaryClassnameProps) => {
  const [isRemoved, setRemoved] = useState(false)
  const toggleRemoved = () => setRemoved(!isRemoved)

  return (
    <motion.div variants={variants()}>
      <Container
        isRemoved={isRemoved}
        whileHover="largeHover"
        whileTap="largeClick"
        variants={variants()}
        onClick={toggleRemoved}
      >
        <Classname isRemoved={isRemoved}>{name}</Classname>
        <Remove isRemoved={isRemoved} />
      </Container>
    </motion.div>
  )
}
