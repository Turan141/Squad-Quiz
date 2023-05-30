import { getApp } from '@bus/app/selector'
import React from 'react'
import { useSelector } from 'react-redux'
import { QuizCoordsValue } from './QuizCoordsValue'

export const QuizCoordinates = React.memo(function QuizCoordinates() {
	const { hoveredCells } = useSelector(getApp)
	if (!hoveredCells) return null

	return (
		<div className='quiz_area_coords'>
			<h1>Hover Squares</h1>
			{hoveredCells.map((coord, index) => (
				<QuizCoordsValue
					key={`${coord.rowIndex}${coord.cellIndex}${index}`}
					row={coord.rowIndex}
					col={coord.cellIndex}
				/>
			))}
		</div>
	)
})
