import React from 'react'
import ReactDOM from 'react-dom'
import { Start } from './pages/start'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.green};
    font-size: 42px;
  }

  h2 {
    color ${(props) => props.theme.colors.grey};
    font-size: 18px;
    font-weight: normal;
  }

  h3 {
    color: ${(props) => props.theme.colors.black};
    font-size: 18px;
    font-weight: bold;
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
        <Start />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
