import * as React from 'react'
import styled from 'styled-components'
import { Box, Sizes } from '../box'
import { Trash } from '../trash'

type FileProps = {
  name: string
  path: string
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

export const File = ({ name, path }: FileProps) => {
  return (
    <Box marginBottom={Sizes.m}>
      <FileContainer>
        <Box>
          <Box marginBottom={Sizes.s}>
            <h3>{name}</h3>
          </Box>
          <p>{path}</p>
        </Box>
        <Trash />
      </FileContainer>
    </Box>
  )
}
