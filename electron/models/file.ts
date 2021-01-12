import { getClassnames } from '../resolvers/get-classnames'
import { getPath } from '../resolvers/get-path'
import { getContent } from '../resolvers/get-content'
import { getCleanClassnames } from '../resolvers/get-clean-classnames'

export const file = {
  getContent,
  getPath,
  getClassnames,
  getCleanClassnames,
}
