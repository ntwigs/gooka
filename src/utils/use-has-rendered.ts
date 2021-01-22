import { useEffect, useState } from 'react'

export const useHasRendered = () => {
  const [hasRendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  return hasRendered
}
