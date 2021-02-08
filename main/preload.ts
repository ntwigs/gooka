import { ipcRenderer, contextBridge, shell } from 'electron'

// This is bad - and not secure.
// https://www.electronjs.org/docs/tutorial/context-isolation
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: ipcRenderer.send,
  on: (channel: string, callback: () => void) => {
    ipcRenderer.on(channel, callback)
  },
})

contextBridge.exposeInMainWorld('shell', {
  openExternal: shell.openExternal,
})
