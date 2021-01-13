import { getClassnames } from '../resolvers/file/get-classnames'
import { getPath } from '../resolvers/file/get-path'
import { getContent } from '../resolvers/file/get-content'
import { getCleanClassnames } from '../resolvers/file/get-clean-classnames'

export const file = {
  getContent,
  getPath,
  getClassnames,
  getCleanClassnames,
}
