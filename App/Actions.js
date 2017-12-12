// @flow

import { Dispatch, ThunkAction } from './Types'
const API_URL = 'https://poloniex.com/public?command=returnTicker'

function getData (): ThunkAction {
  return (dispatch: Dispatch) => {
    fetch({
      url: API_URL,
      method: 'GET'
    })
      .then(list => {
        dispatch({
          type: 'LOADED_DATA',
          list
        })
      })
      .catch(error => {
        dispatch({
          type: 'ERROR',
          error
        })
      })
  }
}

module.exports = {
  getData
}
