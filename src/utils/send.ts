import { ipcRenderer } from './ipcRender'
import { Events } from '../../common/events'

export const send = <Props>(name: Events, props: Props) => {
  ipcRenderer.send(name, props)
}
