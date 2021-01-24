import { motion } from 'framer-motion'
import * as React from 'react'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { variants } from '../../../animations/animation'
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
}

export const UnnecessaryClassname = ({ name }: UnnecessaryClassnameProps) => {
  const theme = useTheme()
  const [isRemoved, setRemoved] = useState(false)

  const toggleRemoved = () => setRemoved(!isRemoved)

  return (
    <motion.div variants={variants()}>
      <Container
        animate={{
          background: isRemoved ? theme.colors.grey : theme.colors.green,
        }}
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
