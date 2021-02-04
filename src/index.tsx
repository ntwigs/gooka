import React from 'react'
import ReactDOM from 'react-dom'
import { Start } from './components/pages/start'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AnimatedOverlay } from './components/atoms/overlay'
import { AlertProvider } from './components/molecules/alert/context'
import { GlobalStyle } from './theme/global-style'
import { ThemeContextProvider } from './components/molecules/theme-button/context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <GlobalStyle />
        <AlertProvider>
          <AnimatedOverlay />
          <Start />
        </AlertProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
