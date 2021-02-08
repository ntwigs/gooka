import { ipcRenderer, contextBridge, shell } from 'electron'

// This is bad - and not secure.
// https://www.electronjs.org/docs/tutorial/context-isolation
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: ipcRenderer.send,
  on: (channel: string, callback: (_: any, data: unknown) => void) => {
    const newCallback = (_: unknown, data: unknown) => callback(_, data)
    ipcRenderer.on(channel, newCallback)
  },
})

contextBridge.exposeInMainWorld('shell', {
  openExternal: shell.openExternal,
})
