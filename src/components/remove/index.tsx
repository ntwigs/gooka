import * as React from 'react'
import remove from '../../assets/remove.svg'
import styled from 'styled-components'

type RemoveImageProps = {
  isRemoved?: boolean
}

const RemoveImage = styled.img<RemoveImageProps>`
  cursor: pointer;
  pointer-events: all;
  transition: all 250ms;
  transform: ${({ isRemoved }) =>
    isRemoved ? 'rotate(45deg)' : 'rotate(0deg)'};
`

export const Remove = ({ isRemoved }: RemoveImageProps) => (
  <RemoveImage
    isRemoved={isRemoved}
    src={remove}
    alt="Remove classname from list"
  />
)
