import { ipcRenderer } from './ipcRender'
import { Events } from '../../common/events'

export const on = <MainResponse>(
  name: Events,
  fn: (_: unknown, props: MainResponse) => void,
) => {
  ipcRenderer.on(name, fn)
}
