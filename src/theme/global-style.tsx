import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.title};
    font-weight: 900;
    font-size: 25px;
  }

  h2 {
    color ${(props) => props.theme.colors.title};
    font-size: 18px;
    font-weight: normal;
  }

  h3 {
    color: ${(props) => props.theme.colors.grey};
    font-size: 16px;
    font-weight: normal;
  }

  body {
    overflow: overlay;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey};
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
  }
`
