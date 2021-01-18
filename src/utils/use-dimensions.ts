import { RefObject, useEffect, useRef, useState } from 'react'

export const useDimensions = (ref: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const width = ref.current?.offsetWidth || 0
    const height = ref.current?.offsetHeight || 0
    setDimensions({ height, width })
  }, [ref, setDimensions])

  return dimensions
}
