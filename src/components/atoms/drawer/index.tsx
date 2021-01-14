import styled from 'styled-components'

export const Drawer = styled.div`
  width: 331px;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightGreen};
  border-top-right-radius: 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-right: 5px;
  padding-left: 5px;
`
