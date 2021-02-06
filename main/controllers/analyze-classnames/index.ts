import { IpcMainEvent } from 'electron/main'
import { File } from '../../../common/types/file'
import { getClasses } from '../get-classes'
import { services } from '../../services'
import { reply } from '../../utils/reply'
import { handleError } from '../handle-error'
import { getUsage } from '../get-usage'

type AnalyzeClassnamesProps = {
  files: File[]
  styles: File[]
}
export const analyzeClassnames = (
  event: IpcMainEvent,
  args: AnalyzeClassnamesProps,
) => {
  try {
    const { files, styles } = args
    const { getUnused, getUniqueClassnames } = services.classnames

    const fileClasses = files.map(getUsage).flat()
    const styleClasses = styles.map(getClasses).flat()
    const unused = getUnused({ styleClasses, fileClasses })
    const uniqueClassnames = getUniqueClassnames({
      classnames: unused,
    })

    reply<string[]>(event, 'analyze-classnames', uniqueClassnames)
  } catch (error) {
    handleError(event, error)
  }
}
