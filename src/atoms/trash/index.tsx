import * as React from 'react'
import trash from '../../assets/delete.svg'
import styled from 'styled-components'

const TrashImage = styled.img`
  cursor: pointer;
  pointer-events: all;
`

type TrashProps = {
  onClick: () => void
}

export const Trash = ({ onClick }: TrashProps) => (
  <TrashImage onClick={onClick} src={trash} alt="Remove file from list" />
)
