import { GetSelectorError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getSelectors = (content: string): string[] => {
  const css = /[.|#]-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g
  const { error, result } = withError(() => content.match(css) || [])

  if (error) {
    throw new GetSelectorError('Could not get Selectors.')
  }

  return result
}
