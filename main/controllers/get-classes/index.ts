import { services } from '../../services'
import { File } from '../../../common/types/file'

export const getClasses = (file: File) => {
  const { getPath, getContent } = services.file
  const { getClassnames, getCleanClassnames } = services.classnames
  const path = getPath(file)
  const content = getContent(path)
  const classnames = getClassnames(content)
  return getCleanClassnames(classnames)
}
