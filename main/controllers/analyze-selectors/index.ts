import { IpcMainEvent } from 'electron/main'
import { File } from '../../../common/types/file'
import { getClasses } from '../get-selectors'
import { services } from '../../services'
import { reply } from '../../utils/reply'
import { handleError } from '../handle-error'
import { getUsage } from '../get-usage'

type AnalyzeSelectorsProps = {
  files: File[]
  styles: File[]
}
export const analyzeSelectors = (
  event: IpcMainEvent,
  args: AnalyzeSelectorsProps,
) => {
  try {
    const { files, styles } = args
    const { getUnused, getUniqueSelectors } = services.selectors

    const fileClasses = files.map(getUsage).flat()
    const styleClasses = styles.map(getClasses).flat()
    const unused = getUnused({ styleClasses, fileClasses })
    const uniqueSelectors = getUniqueSelectors({
      Selectors: unused,
    })

    reply<string[]>(event, 'analyze-selectors', uniqueSelectors)
  } catch (error) {
    handleError(event, error)
  }
}
