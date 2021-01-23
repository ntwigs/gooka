import * as path from 'path'
import { File } from '../../../common/types/file'
import { GetPathError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

export const getPath = (file: File) => {
  const { error, result } = withError<string>(() =>
    path.resolve(`/${file.path}/${file.name}`),
  )

  if (error) {
    throw new GetPathError(`Could not find provided file ${file.name}.`)
  }

  return result
}
