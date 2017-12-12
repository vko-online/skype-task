// @flow

export type Action =
{ type: 'LOADED_DATA', list: Array<Object> }
| { type: 'SWITCH_TAB', tab: string }
| { type: 'ERROR', error: Object }

export type PromiseAction = Promise<Action>
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any // eslint-disable-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch) => any
