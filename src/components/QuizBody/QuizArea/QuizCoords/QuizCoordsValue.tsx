import { QuizCellProps, QuizCordsProps } from '@interfaces/QuizContainer/QuizOption.interface'
import React from 'react'

export const QuizCoordsValue: React.FC<QuizCordsProps> = React.memo(function QuizCoordsValue({
	row,
	col,
}) {
	return (
		<div className='coords_cell'>
			Row {row} Col {col}
		</div>
	)
})
