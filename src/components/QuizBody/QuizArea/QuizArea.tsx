import React, { useMemo } from 'react'
import { buildSquareBlock } from '@utils/quizBuilder'
import { useSelector } from 'react-redux'
import { getApp } from '@bus/app/selector'
import { QuizCell } from './QuizCell'

export const QuizArea = React.memo(function QuizArea() {
	const { quizLevel, quizStatus } = useSelector(getApp)
	const quizArea = useMemo(() => buildSquareBlock(quizLevel), [quizLevel, quizStatus])
	if (quizStatus === 'stopped') return null

	return (
		<div className='quiz_area'>
			{quizArea.map((row, rowIndex) => (
				<div key={rowIndex} className='quiz_area_rows'>
					{row.map((cell, cellIndex) => (
						<QuizCell
							key={cellIndex}
							cell={cell}
							rowIndex={rowIndex + 1}
							cellIndex={cellIndex + 1}
						/>
					))}
				</div>
			))}
		</div>
	)
})
