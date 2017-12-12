// @flow

import { Dispatch, ThunkAction } from './Types'
const API_URL = 'https://poloniex.com/public?command=returnTicker' // returns html page with recaptcha
const dataJson = require('./data.json')

function normalize (data) {
  const names = Object.keys(data)
  return names.map(name => {
    return {
      name: name,
      highestBid: Number(data[name].highestBid),
      percentChange: Number(data[name].percentChange)
    }
  })
}

function loadData (): ThunkAction {
  return (dispatch: Dispatch) => {
    fetch({
      url: API_URL,
      method: 'GET'
    })
      // .then(response => response.json())
      .then(list => {
        dispatch({
          type: 'LOADED_DATA',
          list: normalize(dataJson)
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
  loadData
}
