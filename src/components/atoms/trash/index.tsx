import * as React from 'react'
import remove from '../../../assets/remove.svg'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TrashImage = styled.img`
  cursor: pointer;
  pointer-events: all;
`

type TrashProps = {
  onClick: () => void
  isActive?: boolean
}

const TrashContainer = styled(motion.div)`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.delete};
`

const variants = {
  active: { opacity: 1, x: 0 },
  inactive: { opacity: 0, x: -10 },
}

export const Trash = ({ onClick, isActive }: TrashProps) => (
  <TrashContainer
    initial={false}
    transition={{ duration: 0.1, type: 'spring', mass: 0.1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={isActive ? 'active' : 'inactive'}
    variants={variants}
  >
    <TrashImage onClick={onClick} src={remove} alt="Remove file from list" />
  </TrashContainer>
)
