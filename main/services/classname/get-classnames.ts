import { GetClassnameError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getClassnames = (content: string): string[] => {
  const css = /[.|#]-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g
  const { error, result } = withError(() => content.match(css) || [])

  if (error) {
    throw new GetClassnameError('Could not get classnames.')
  }

  return result
}
