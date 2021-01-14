import styled from 'styled-components'

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 40px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
  }
`
