import { services } from '../../services'
import { File } from '../../../common/types/file'

export const getUsage = (file: File) => {
  const { getPath, getContent } = services.file
  const { getUsage, getCleanClassnames } = services.classnames
  const path = getPath(file)
  const content = getContent(path)
  const classnames = getUsage(content)
  return getCleanClassnames(classnames)
}
