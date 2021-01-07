import * as React from 'react'
import styled from 'styled-components'
import { Box, Sizes } from '../box'
import { Trash } from '../trash'
import { useDispatch } from 'react-redux'
import { removeFile } from '../../redux/actions/files'
import { removeStyle } from '../../redux/actions/style'

type FileProps = {
  name: string
  path: string
  id: string
  fileType?: 'file' | 'style'
}

const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.light};
  padding: 15px;
  align-items: center;
`

export const File = ({ name, path, id, fileType }: FileProps) => {
  const dispatch = useDispatch()
  const remove = () =>
    fileType === 'file' ? dispatch(removeFile(id)) : dispatch(removeStyle())

  return (
    <Box marginBottom={Sizes.m}>
      <FileContainer>
        <Box>
          <Box marginBottom={Sizes.s}>
            <h3>{name}</h3>
          </Box>
          <p>{path}</p>
        </Box>
        <Trash onClick={remove} />
      </FileContainer>
    </Box>
  )
}
