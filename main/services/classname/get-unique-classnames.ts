import { getUniqueSelectorsError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

type GetUniqueSelectors = {
  Selectors: string[]
}

export const getUniqueSelectors = ({ Selectors }: GetUniqueSelectors) => {
  const { error, result } = withError(() => [...new Set(Selectors)])

  if (error) {
    throw new getUniqueSelectorsError('Could not get unique Selectors.')
  }

  return result
}
