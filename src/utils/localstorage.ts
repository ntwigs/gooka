type GetProps<T> = {
  item: string
  fallback: T
}

const get = <T>({ item, fallback }: GetProps<T>) => {
  const result = localStorage.getItem(item)
  return result ?? fallback
}

type SaveProps = {
  item: string
  value: string
}

const save = ({ item, value }: SaveProps) => {
  localStorage.setItem(item, value)
  return value
}

export const storage = {
  get,
  save,
}
