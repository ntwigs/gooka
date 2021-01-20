import React from 'react'
import ReactDOM from 'react-dom'
import { Start } from './components/pages/start'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AnimatedOverlay } from './components/atoms/overlay'

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
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatedOverlay />
        <Start />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
