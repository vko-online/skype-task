import { all, fork, put, take, select } from 'redux-saga/effects'

import { addMany } from './Realm'
import { getCurrentData } from './Selectors'

function * realm () {
  while (true) {
    yield take('LOAD_DATA')

    const data = yield select(getCurrentData)
    yield put(addMany(data))
  }
}

export default function * root () {
  const sagas = [
    realm
  ]

  yield all(
    sagas.map(saga => fork(saga))
  )
}
