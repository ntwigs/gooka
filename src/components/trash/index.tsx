import trash from '../../assets/delete.svg'
import styled from 'styled-components'

const TrashImage = styled.img`
  fill: white;
  color: white;
  stroke: white;
`

export const Trash = () => (
  <TrashImage src={trash} alt="Remove file from list" />
)
