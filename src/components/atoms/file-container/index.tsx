import styled from 'styled-components'

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.light};
  padding: 15px;
  align-items: center;
`
