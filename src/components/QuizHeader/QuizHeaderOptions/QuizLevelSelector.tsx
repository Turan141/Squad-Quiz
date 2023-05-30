import { getApp } from '@bus/app/selector'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuizLevelOption } from './QuizLevelOption'
import { appActions } from '@bus/app/actions'

export const QuizLevelSelector = React.memo(function QuizLevelSelector() {
	const dispatch = useDispatch()
	const { quizOptions, quizLevel } = useSelector(getApp)

	const onSelectLevel = useCallback((field: any) => {
		dispatch(appActions.setQuizLevel(field))
	}, [])

	if (!quizOptions) return null

	return (
		<div className='quiz_header_level_selector'>
			<select defaultValue={quizLevel} onChange={e => onSelectLevel(e.target.value)}>
				{quizLevel === 0 && (
					<QuizLevelOption level={{ name: 'Pick mode', field: 0, id: '0' }} isPlaceholder />
				)}
				{quizOptions.map((level: any) => (
					<QuizLevelOption level={level} key={level.id} />
				))}
			</select>
		</div>
	)
})
