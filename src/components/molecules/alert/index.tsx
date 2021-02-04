import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

const AlertContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 2;
`
const AlertBox = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.alert};
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 10px;
  width: max-content;
`

const AlertMessage = styled.p`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.lightText};
`

type AlertProps = {
  message: string
}

const alert = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 22,
  },
}

export const Alert = ({ message }: AlertProps) => {
  return (
    <AlertContainer>
      <motion.div animate="animate" exit="exit" initial="exit" variants={alert}>
        <AlertBox>
          <AlertMessage>{message}</AlertMessage>
        </AlertBox>
      </motion.div>
    </AlertContainer>
  )
}
