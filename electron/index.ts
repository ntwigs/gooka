import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as isDev from 'electron-is-dev'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'

let win: BrowserWindow | null = null

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})

function createWindow() {
  win = new BrowserWindow({
    width: 970,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  if (isDev) {
    win.loadURL('http://localhost:3000/index.html')
  } else {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`)
  }

  win.on('closed', () => (win = null))

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
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

  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err))

  if (isDev) {
    win.webContents.openDevTools()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
