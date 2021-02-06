import { services } from '../../services'
import { File } from '../../../common/types/file'

export const getClasses = (file: File) => {
  const { getPath, getContent } = services.file
  const { getSelectors, getCleanSelectors } = services.Selectors
  const path = getPath(file)
  const content = getContent(path)
  const Selectors = getSelectors(content)
  return getCleanSelectors(Selectors)
}
