import styled from 'styled-components'

export const Layout = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;

  @media (max-width: 800px) {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
  }
`
