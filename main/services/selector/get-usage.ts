import { GetUsageError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getUsage = (content: string): string[] => {
  const usage = /[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g
  const { error, result } = withError(() => content.match(usage) || [])

  if (error) {
    throw new GetUsageError('Could not find selector usage in.')
  }

  return result
}
