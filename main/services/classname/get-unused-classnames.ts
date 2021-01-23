import { GetUnusedClassnamesError } from '../../utils/errors'
import { withError } from '../../utils/with-error'

type GetUnusedProps = {
  styleClasses: string[]
  fileClasses: string[]
}

export const getUnused = ({ styleClasses, fileClasses }: GetUnusedProps) => {
  const { error, result } = withError(() =>
    styleClasses.filter((x) => fileClasses.indexOf(x) < 0),
  )

  if (error) {
    throw new GetUnusedClassnamesError('Could not get unused classnames.')
  }

  return result
}
