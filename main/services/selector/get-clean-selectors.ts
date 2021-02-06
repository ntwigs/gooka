import { GetCleanSelectorError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getCleanSelectors = (content: string[]): string[] => {
  const { error, result } = withError(() =>
    content.map((selector) => selector.trim()),
  )

  if (error) {
    throw new GetCleanSelectorError('Could not get clean Selectors.')
  }

  return result
}
