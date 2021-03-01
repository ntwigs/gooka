import * as React from 'react'
import { Box, Sizes } from '../../atoms/box'
import { Trash } from '../../atoms/trash'
import { useDispatch } from 'react-redux'
import { removeFile, removeStyle } from '../../../redux/actions/files'
import { FileContainer } from '../../atoms/file-container'
import { Path } from '../../atoms/path-text'
import styled from 'styled-components'
import { useState } from 'react'
import { motion } from 'framer-motion'

const FileTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.fileTitle};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

type FileProps = {
  name: string
  path: string
  id: string
  fileType?: 'file' | 'style'
}

const variants = {
  listIn: {
    opacity: 1,
    height: 'auto',
  },
  initial: {
    opacity: 0,
    height: 0,
  },
}

const FileOverflowContainer = styled(motion.div)`
  overflow: hidden;
  overflow-x: visible;
  padding-right: 1px;
`

export const File = ({ name, path, id, fileType }: FileProps) => {
  const [isHover, setHover] = useState(false)
  const dispatch = useDispatch()
  const remove = () =>
    fileType === 'file' ? dispatch(removeFile(id)) : dispatch(removeStyle(id))

  const hoverIn = () => setHover(true)
  const hoverOut = () => setHover(false)

  return (
    <FileOverflowContainer variants={variants}>
      <FileOverflowContainer
        animate={{ opacity: 1, height: 'auto' }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, height: 0 }}
      >
        <Box
          marginBottom={Sizes.m}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          <FileContainer>
            <Box marginRight={Sizes.m}>
              <Box marginBottom={Sizes.s}>
                <FileTitle>{name}</FileTitle>
              </Box>
              <Path>{path}</Path>
            </Box>
            <Trash isActive={isHover} onClick={remove} />
          </FileContainer>
        </Box>
      </FileOverflowContainer>
    </FileOverflowContainer>
  )
}
