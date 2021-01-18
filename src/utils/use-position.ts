import { RefObject, useEffect, useRef, useState } from 'react'

export const usePosition = (ref: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const { x = 0, y = 0 } = ref.current?.getBoundingClientRect() || {}
    setPosition({ x, y })
  }, [ref, setPosition])

  return position
}
