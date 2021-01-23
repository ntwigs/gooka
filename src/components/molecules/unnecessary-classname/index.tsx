import { motion } from 'framer-motion'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Remove } from '../../atoms/remove'

type ContainerProps = {
  isRemoved?: boolean
}

const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: ${({ theme, isRemoved }) =>
    isRemoved ? theme.colors.grey : theme.colors.green};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;
  cursor: pointer;
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

const variants = {
  exit: {
    opacity: 0,
  },
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 1,
  },
}

export const UnnecessaryClassname = ({ name }: UnnecessaryClassnameProps) => {
  const [isRemoved, setRemoved] = useState(false)
  const remove = () => setRemoved(!isRemoved)

  return (
    <Container
      isRemoved={isRemoved}
      onClick={remove}
      whileHover="hover"
      whileTap="click"
      exit="exit"
      variants={variants}
    >
      <Classname isRemoved={isRemoved}>{name}</Classname>
      <Remove isRemoved={isRemoved} />
    </Container>
  )
}
