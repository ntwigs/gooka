import * as React from 'react'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Sizes } from '../box'

type DropzoneProps = {
  isActive?: boolean
}

const FileContainer = styled.div<DropzoneProps>`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  border: 1px dotted ${(props) => props.theme.colors.light};
  align-items: center;
  opacity: ${(props) => (props.isActive ? 0.5 : 1)};
  height: 69px;
  position: relative;
`

const Input = styled.input`
  background: green;
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`

export const Dropzone = () => {
  const [file, setFile] = useState('')
  const [isActive, setActive] = useState(false)

  console.log(file)

  return (
    <Box marginBottom={Sizes.m}>
      <FileContainer isActive={isActive}>
        <Input
          value={file}
          onDragOver={() => {
            setActive(true)
          }}
          onDragLeave={() => {
            setActive(false)
          }}
          onDrop={() => {
            setActive(false)
          }}
          onKeyPress={(e) => {
            e.preventDefault() // Do not allow typing
          }}
          onChange={(e) => {
            if (e.target.value) {
              setFile(e.target.value)
            }
          }}
        />
        <p>Drop styles here</p>
      </FileContainer>
    </Box>
  )
}

export const StyleDropzone = () => {
  return <Dropzone />
}
