import { services } from '../../services'
import { File } from '../../../common/types/file'

export const getUsage = (file: File) => {
  const { getPath, getContent } = services.file
  const { getUsage, getCleanSelectors } = services.selectors
  const path = getPath(file)
  const content = getContent(path)
  const Selectors = getUsage(content)
  return getCleanSelectors(Selectors)
}
