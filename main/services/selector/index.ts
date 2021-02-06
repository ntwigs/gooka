import { getSelectors } from './get-selectors'
import { getCleanSelectors } from './get-clean-selectors'
import { getUniqueSelectors } from './get-unique-selectors'
import { getUnused } from './get-unused-selectors'
import { getUsage } from './get-usage'

export const selectors = {
  getUnused,
  getUniqueSelectors,
  getCleanSelectors,
  getSelectors,
  getUsage,
}
