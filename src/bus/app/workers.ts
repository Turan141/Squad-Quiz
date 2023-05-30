import { call, put } from 'redux-saga/effects'

import { appActions } from '@bus/app/actions'
import { getQuizOptions } from '@api/get'

export function* workerTemplate(): Generator<any, ReturnType<typeof getQuizOptions>, any> {
	const resp = yield call(getQuizOptions)
	yield put(appActions.getQuizOptionsSuccess(resp))
	yield put(appActions.getQuizOptionsFailed(null))
	return resp
}
