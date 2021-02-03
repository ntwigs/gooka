import React from 'react'
import ReactDOM from 'react-dom'
import { Start } from './components/pages/start'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AnimatedOverlay } from './components/atoms/overlay'
import { AlertProvider } from './components/molecules/alert/context'
import { GlobalStyle } from './theme/global-style'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={dark}>
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
