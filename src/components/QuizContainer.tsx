import { ReactChildrenProps } from '@interfaces/QuizContainer/QuizOption.interface'
import React from 'react'

// I could avoid React.memo cuz i have {children},
// which prevents rerender, but it needs for diff props in future
export const QuizContainer: React.FC<ReactChildrenProps> = React.memo(function QuizContainer({
	children,
}) {
	return <div className='quiz_container'>{children}</div>
})
