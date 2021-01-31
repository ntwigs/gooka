import styled from 'styled-components'

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 40px;
  overflow-y: overlay;

  @media (max-width: 800px) {
    overflow-y: visible;
  }
`
