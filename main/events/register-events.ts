import { ipcMain } from 'electron'
import { IpcMainEvent } from 'electron/main'
import { File } from '../../common/types/file'
import { analyzeClassnames } from './analyze-classnames'

type RegisterProps<T> = {
  event: string
  fn: (event: IpcMainEvent, args: T) => void
}

const register = <T>({ event, fn }: RegisterProps<T>) => {
  ipcMain.on(event, fn)
}

export const registerEvents = () => {
  register<{ files: File[]; styles: File[] }>({
    event: 'analyze-classnames',
    fn: analyzeClassnames,
  })
}
