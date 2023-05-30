import React, { ReactNode, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { appActions } from '@bus/app/actions';
import { ReactChildrenProps } from '@interfaces/QuizContainer/QuizOption.interface';


export const QuizHeader: React.FC<ReactChildrenProps> = React.memo(function QuizHeader({ children }) {
	const dispatch = useDispatch()

	const getQuizOptions = useCallback(() => {
		dispatch(appActions.getQuizOptions())
	}, [dispatch])

	useEffect(() => {
		getQuizOptions()
	}, [])

	return <div className='quiz_header'>{children}</div>
})
