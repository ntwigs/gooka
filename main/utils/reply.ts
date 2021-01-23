import { IpcMainEvent } from 'electron/main'

import { Events } from '../../common/events'

export const reply = <T>(event: IpcMainEvent, name: Events, data: T) => {
  event.reply(name, data)
}
