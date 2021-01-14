import { IpcMainEvent } from 'electron/main'
import { classnames } from '../actions/classname'
import { file as fileModel } from '../actions/file'
import { File } from '../../common/types/file'

type AnalyzeClassnamesProps = {
  files: File[]
  styles: File[]
}

const getClasses = (file: File) => {
  const { getPath, getContent, getClassnames, getCleanClassnames } = fileModel
  const path = getPath(file)
  const content = getContent(path)
  const classnames = getClassnames(content)
  return getCleanClassnames(classnames)
}

export const analyzeClassnames = (
  event: IpcMainEvent,
  args: AnalyzeClassnamesProps,
) => {
  const { files, styles } = args

  const fileClasses = files.map(getClasses).flat()
  const styleClasses = styles.map(getClasses).flat()
  const unused = classnames.getUnused({ styleClasses, fileClasses })
  const uniqueClassnames = classnames.getUniqueClassnames({
    classnames: unused,
  })
  event.reply('analyze-classnames', uniqueClassnames)
}
