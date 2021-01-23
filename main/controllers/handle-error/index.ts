import { IpcMainEvent } from 'electron/main'
import { reply } from '../../utils/reply'

export const handleError = (event: IpcMainEvent, error: Error) => {
  reply<string>(event, 'analyze-error', error.message)
}
