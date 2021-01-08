import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header resultheader'
    'files result';
`
