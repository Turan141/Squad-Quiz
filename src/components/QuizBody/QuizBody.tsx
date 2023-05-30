import React from 'react'
import { useSelector } from 'react-redux'
import { getApp } from '@bus/app/selector'
import { ReactChildrenProps } from '@interfaces/QuizContainer/QuizOption.interface'

export const QuizBody: React.FC<ReactChildrenProps> = React.memo(function QuizBody({ children }) {

	return (
		<div className='quiz_body'>
			{children}
		</div>
	)
})
