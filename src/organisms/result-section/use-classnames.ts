import { useEffect, useState } from 'react'
import { hasElements } from 'src/utils/has-elements'
import { ipcRenderer } from 'src/utils/ipcRender'

export const useClassnames = () => {
  const [classnames, setClassnames] = useState<string[]>([])

  useEffect(() => {
    ipcRenderer.on('analyze-classnames', (_: unknown, arg: string[]) => {
      if (hasElements(arg)) setClassnames(arg)
    })
  }, [])

  return classnames
}
