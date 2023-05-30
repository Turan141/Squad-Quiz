import { createAction } from '@reduxjs/toolkit'
import { appTypes } from '@bus/app/types'

export const appActions = {
	templateRequest: createAction(appTypes.TEMPLATE_REQUEST, data => ({
		payload: data,
	})),
	getQuizOptionsSuccess: createAction(appTypes.GET_QUIZ_OPTIONS_SUCCESS, data => ({
		payload: data,
	})),
	getQuizOptionsFailed: createAction(appTypes.GET_QUIZ_OPTIONS_FAILED, error => ({
		payload: error,
	})),
	setQuizLevel: createAction(appTypes.SELECT_QUIZ_LEVEL, data => ({ payload: data })),
	getQuizOptions: createAction(appTypes.GET_QUIZ_OPTIONS),
	triggerQuiz: createAction(appTypes.TRIGGER_QUIZ),
	addHoveredCellPos: createAction(appTypes.ADD_HOVERED_CELL_POS, data => ({ payload: data })),
}
