import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { NO_ELEMENT } from '../../../utils/no-element'
import { Box, Sizes } from '../../atoms/box'

type FileContainerProps = {
  isActive?: boolean
}

const FileContainer = styled.div<FileContainerProps>`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  border: 1px dotted ${(props) => props.theme.colors.light};
  align-items: center;
  opacity: ${(props) => (props.isActive ? 0.5 : 1)};
  height: 67px;
  position: relative;
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

type DropzoneProps = {
  title: string
  onDrop: (file: string) => void
  hasMaxFiles: boolean
}

export const Dropzone = ({ title, onDrop, hasMaxFiles }: DropzoneProps) => {
  const [isActive, setActive] = useState(false)
  const disable = () => setActive(false)
  const enable = () => setActive(true)
  const EMPTY_STRING = ''

  if (hasMaxFiles) {
    return NO_ELEMENT
  }

  return (
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
        <p>{title}</p>
      </FileContainer>
    </Box>
  )
}
