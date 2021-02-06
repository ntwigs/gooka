import { ipcMain } from 'electron'
import { IpcMainEvent } from 'electron/main'
import { File } from '../../common/types/file'
import { Events } from '../../common/events'
import { analyzeSelectors } from '../controllers/analyze-selectors'

type RegisterProps<T> = {
  event: Events
  fn: (event: IpcMainEvent, args: T) => void
}

const register = <T>({ event, fn }: RegisterProps<T>) => {
  ipcMain.on(event, fn)
}

export const registerEvents = () => {
  register<{ files: File[]; styles: File[] }>({
    event: 'analyze-selectors',
    fn: analyzeSelectors,
  })
}
