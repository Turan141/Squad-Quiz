import { all, takeLatest, call } from 'redux-saga/effects'

import { appTypes } from '@bus/app/types'
import { workerTemplate } from '@bus/app/workers'

function* watchTemplate() {
	yield takeLatest(appTypes.GET_QUIZ_OPTIONS, workerTemplate)
}

export function* watchApp() {
	yield all([call(watchTemplate)])
}
