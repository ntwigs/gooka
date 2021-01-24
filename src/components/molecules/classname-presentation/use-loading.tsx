import { useSelector } from 'react-redux'
import { getIsLoading } from '../../../redux/selectors/files'

export const useLoading = () => {
  const isLoading = useSelector(getIsLoading)
  return isLoading
}
