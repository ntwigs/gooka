import * as fs from 'fs'
import { GetContentError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getContent = (path: string) => {
  const { error, result } = withError<string>(() =>
    fs.readFileSync(path, { encoding: 'utf-8' }),
  )

  if (error) {
    throw new GetContentError('Could not get content from provided files.')
  }

  return result
}
