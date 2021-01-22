import { useEffect, useState } from 'react'

type UseWaitProps<T> = {
  value: T
  delay: number
}

export const useWait = <T>({ value, delay = 0 }: UseWaitProps<T>) => {
  const [_value, setValue] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setValue(value)
    }, delay)
  }, [value])

  return { value: _value }
}
