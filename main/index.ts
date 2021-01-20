import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as isDev from 'electron-is-dev'
import { registerEvents } from './events/register-events'

registerEvents()

const getBrowserWindow = () => {
  return new BrowserWindow({
    width: 850,
    height: 850,
    webPreferences: {
      nodeIntegration: true,
    },
  })
}

const hideMenu = (browserWindow: BrowserWindow) => {
  !isDev && browserWindow.setMenu(null)
}

const loadURL = (browserWindow: BrowserWindow) => {
  const devURL = 'http://localhost:3000/index.html'
  const prodURL = `file://${__dirname}/../index.html`
  browserWindow.loadURL(isDev ? devURL : prodURL)
}

const setHotReloading = () => {
  require('electron-reload')(__dirname, {
    electron: path.join(
      __dirname,
      '..',
      '..',
      'node_modules',
      '.bin',
      'electron',
    ),
    forceHardReset: true,
    hardResetMethod: 'exit',
  })
}

const createWindow = () => {
  const browserWindow = getBrowserWindow()
  hideMenu(browserWindow)
  loadURL(browserWindow)
  isDev && setHotReloading()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', createWindow)
