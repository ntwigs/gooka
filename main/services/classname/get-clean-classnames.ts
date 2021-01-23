import { GetCleanClassnameError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getCleanClassnames = (content: string[]): string[] => {
  const { error, result } = withError(() =>
    content.map((classname) => classname.trim()),
  )

  if (error) {
    throw new GetCleanClassnameError('Could not get clean classnames.')
  }

  return result
}
