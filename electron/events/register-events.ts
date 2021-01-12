import { ipcMain } from 'electron'
import { IpcMainEvent } from 'electron/main'
import { analyzeClassnames } from './analyze-classnames'

type RegisterProps<T> = {
  event: string
  fn: (event: IpcMainEvent, args: T) => void
}

const register = <T>({ event, fn }: RegisterProps<T>) => {
  ipcMain.on(event, fn)
}

export const registerEvents = () => {
  register<{ files: FileProps[]; styles: FileProps[] }>({
    event: 'analyze-classnames',
    fn: analyzeClassnames,
  })
}
