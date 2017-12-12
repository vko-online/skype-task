import { createSelector } from 'reselect'
import { identity } from 'lodash'
const getDataState = state => state.data

export const getCurrentData = createSelector(
  getDataState, identity
)
