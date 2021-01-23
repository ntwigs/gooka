import { getUniqueClassnamesError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

type GetUniqueClassnames = {
  classnames: string[]
}

export const getUniqueClassnames = ({ classnames }: GetUniqueClassnames) => {
  const { error, result } = withError(() => [...new Set(classnames)])

  if (error) {
    throw new getUniqueClassnamesError('Could not get unique classnames.')
  }

  return result
}
