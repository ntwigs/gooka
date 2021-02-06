import {
  GetSymbolRemovalError,
  GetUnusedSelectorsError,
} from '../../utils/errors'
import { withError } from '../../utils/with-error'

type GetUnusedProps = {
  styleClasses: string[]
  fileClasses: string[]
}

export const getUnused = ({ styleClasses, fileClasses }: GetUnusedProps) => {
  const {
    error: symbolRemovalError,
    result: styleClassesWithoutSymbols,
  } = withError(() =>
    styleClasses.map((styleClass: string) => styleClass.replace(/[.|#]/g, '')),
  )

  if (symbolRemovalError) {
    throw new GetSymbolRemovalError('Could not remove symbols from selector.')
  }

  const { error: mappingError, result: mappedSelectors } = withError(() =>
    styleClassesWithoutSymbols.map((x) => fileClasses.indexOf(x) < 0),
  )

  if (mappingError) {
    throw new GetUnusedSelectorsError('Could not get unused Selectors.')
  }

  const result = styleClasses.filter((_, index) => mappedSelectors[index])

  return result
}
