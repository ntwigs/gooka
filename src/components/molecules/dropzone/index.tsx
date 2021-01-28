import { motion } from 'framer-motion'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { NO_ELEMENT } from '../../../utils/no-element'
import { Box, Sizes } from '../../atoms/box'

type FileContainerProps = {
  isActive?: boolean
}

const FileContainer = styled(motion.div)<FileContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  opacity: ${(props) => (props.isActive ? 0.5 : 1)};
  position: relative;
  padding: 10px 0;
  width: 100%;
  border: 2px dashed ${({ theme }) => theme.colors.light};
`

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`

const FileOverflowContainer = styled(motion.div)`
  overflow: hidden;
`

const DropzoneText = styled.p`
  color: ${({ theme }) => theme.colors.light};
`

type DropzoneProps = {
  title: string
  onDrop: (file: string) => void
}

const variants = {
  animate: {
    opacity: 1,
    height: 'auto',
  },
  initial: {
    opacity: 0,
    height: 0,
  },
}

export const Dropzone = ({ title, onDrop }: DropzoneProps) => {
  const [isActive, setActive] = useState(false)
  const disable = () => setActive(false)
  const enable = () => setActive(true)
  const EMPTY_STRING = ''

  return (
    <FileOverflowContainer
      variants={variants}
      animate="animate"
      exit="initial"
      initial="initial"
    >
      <Box marginBottom={Sizes.m}>
        <FileContainer isActive={isActive}>
          <Input
            value={EMPTY_STRING}
            onDragOver={enable}
            onDragLeave={disable}
            onDrop={disable}
            onKeyPress={(e) => e.preventDefault()}
            onChange={(event) => {
              const text = event.target.value
              if (text) onDrop(text)
            }}
          />
          <DropzoneText>{title}</DropzoneText>
        </FileContainer>
      </Box>
    </FileOverflowContainer>
  )
}
