import { IpcMainEvent } from 'electron/main'
import { File } from '../../../common/types/file'
import { getClasses } from '../get-classes'
import { services } from '../../services'

type AnalyzeClassnamesProps = {
  files: File[]
  styles: File[]
}
export const analyzeClassnames = (
  event: IpcMainEvent,
  args: AnalyzeClassnamesProps,
) => {
  const { files, styles } = args
  const { getUnused, getUniqueClassnames } = services.classnames

  const fileClasses = files.map(getClasses).flat()
  const styleClasses = styles.map(getClasses).flat()
  const unused = getUnused({ styleClasses, fileClasses })
  const uniqueClassnames = getUniqueClassnames({
    classnames: unused,
  })

  event.reply('analyze-classnames', uniqueClassnames)
}
