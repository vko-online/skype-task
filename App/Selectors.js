import { createSelector } from 'reselect'

const getDataState = state => state.data

export const getCurrentData = createSelector(
  getDataState
)
