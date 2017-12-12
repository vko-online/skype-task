// @flow

import type { Action } from './Types'
const { combineReducers } = require('redux')

export type DataState = Array<Object>;
export type TabState = string;

const initialDataState = []
const initialTabState = 'first'

function data (state: DataState = initialDataState, action: Action): State {
  switch (action.type) {
    case 'LOADED_DATA':
      return [...state, ...action.list]
  }
  return state
}

function tab (state: TabState = initialTabState, action: Action): State {
  switch (action.type) {
    case 'SWITCH_TAB':
      return action.tab
  }
  return state
}

module.exports = combineReducers({
  data,
  tab
})
