import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as isDev from 'electron-is-dev'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'
import { registerEvents } from './events/register-events'

registerEvents()

const getBrowserWindow = () => {
  return new BrowserWindow({
    width: 970,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  })
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
