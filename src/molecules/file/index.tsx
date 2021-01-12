import * as React from 'react'
import { Box, Sizes } from '../../atoms/box'
import { Trash } from '../../atoms/trash'
import { useDispatch } from 'react-redux'
import { removeFile, removeStyle } from '../../redux/actions/files'
import { Path } from 'src/atoms/path-text'
import { FileContainer } from 'src/atoms/file-container'

type FileProps = {
  name: string
  path: string
  id: string
  fileType?: 'file' | 'style'
}

export const File = ({ name, path, id, fileType }: FileProps) => {
  const dispatch = useDispatch()
  const remove = () =>
    fileType === 'file' ? dispatch(removeFile(id)) : dispatch(removeStyle(id))

  return (
    <Box marginBottom={Sizes.m}>
      <FileContainer>
        <Box marginRight={Sizes.m}>
          <Box marginBottom={Sizes.s}>
            <h3>{name}</h3>
          </Box>
          <Path>{path}</Path>
        </Box>
        <Trash onClick={remove} />
      </FileContainer>
    </Box>
  )
}
