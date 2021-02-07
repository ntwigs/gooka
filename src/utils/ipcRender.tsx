const _window = window as any // Missing types from preload
const { on, send } = _window.ipcRenderer

export const ipcRenderer = {
  on,
  send,
}
