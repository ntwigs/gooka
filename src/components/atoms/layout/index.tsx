import styled from 'styled-components'

export const Layout = styled.div`
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex: 1;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`
