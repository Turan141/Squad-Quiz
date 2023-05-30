import { createReducer } from '@reduxjs/toolkit'

import { appActions } from '@bus/app/actions'
import { InitialState } from '@interfaces/QuizContainer/QuizOption.interface'

const initialState: InitialState = {
	quizOptions: null,
	quizLevel: 0,
	quizStatus: 'stopped',
	hoveredCells: [],
}

export const appReducer = createReducer(initialState, builder => {
	builder.addCase(appActions.templateRequest, (state, action) => ({
		...state,
	}))

	builder.addCase(appActions.getQuizOptionsSuccess, (state, action) => ({
		...state,
		quizOptions: action.payload,
	}))

	builder.addCase(appActions.getQuizOptionsFailed, (state, action) => ({
		...state,
	}))

	builder.addCase(appActions.setQuizLevel, (state, action) => ({
		...state,
		quizLevel: action.payload,
	}))
	builder.addCase(appActions.triggerQuiz, state => ({
		...state,
		quizStatus: state.quizStatus === 'stopped' ? 'started' : 'stopped',
	}))
	builder.addCase(appActions.addHoveredCellPos, (state, action) => ({
		...state,
		hoveredCells: [action.payload, ...state.hoveredCells, ],
	}))
})
