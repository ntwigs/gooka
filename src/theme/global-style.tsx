import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  h1 {
    font-weight: 900;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.header}
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.subheader}
  }

  body {
    overflow: overlay;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text}
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 10px;
  }
`
