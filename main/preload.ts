import { ipcRenderer, contextBridge, shell } from 'electron'

// This is bad - and not secure.
// https://www.electronjs.org/docs/tutorial/context-isolation
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: ipcRenderer.send,
  on: ipcRenderer.on,
})

contextBridge.exposeInMainWorld('shell', {
  openExternal: shell.openExternal,
})
