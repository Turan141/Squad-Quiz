import { appActions } from '@bus/app/actions'
import { getApp } from '@bus/app/selector'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const QuizGameTrigger = React.memo(function QuizGameTrigger() {
	const dispatch = useDispatch()
	const { quizStatus } = useSelector(getApp)

	const triggerQuiz = useCallback(() => {
		dispatch(appActions.triggerQuiz())
	}, [])

	return <button onClick={triggerQuiz}>{quizStatus === 'started' ? 'STOP' : 'START'}</button>
})
