import { QuizLevelOptionProps } from '@interfaces/QuizContainer/QuizOption.interface'
import React from 'react'

export const QuizLevelOption: React.FC<QuizLevelOptionProps> = React.memo(function QuizLevelOption({
	level,
	isPlaceholder,
}) {
	return (
		<option hidden={isPlaceholder} value={level.field} key={level.name}>
			{level.name}
		</option>
	)
})
