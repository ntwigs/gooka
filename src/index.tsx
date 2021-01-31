import React from 'react'
import ReactDOM from 'react-dom'
import { Start } from './components/pages/start'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AnimatedOverlay } from './components/atoms/overlay'
import { AlertProvider } from './components/molecules/alert/context'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.green};
    font-weight: 900;
    font-size: 25px;
  }

  h2 {
    color ${(props) => props.theme.colors.green};
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AlertProvider>
          <AnimatedOverlay />
          <Start />
        </AlertProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
