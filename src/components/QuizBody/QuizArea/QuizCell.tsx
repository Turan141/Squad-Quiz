import { appActions } from '@bus/app/actions'
import { getApp } from '@bus/app/selector'
import { QuizCellProps } from '@interfaces/QuizContainer/QuizOption.interface'
import { useThrottle } from '@utils/useThottle'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const QuizCell: React.FC<QuizCellProps> = ({ rowIndex, cellIndex }) => {
	const dispatch = useDispatch()
	const { quizLevel } = useSelector(getApp)
	const [isHovered, setIsHovered] = useState(false)
	const throttledHandleMouseEnter = useRef<(() => void) | any>(null)

	const throttle = useCallback((fn: () => void, delay: number) => {
		if (throttledHandleMouseEnter.current) return
		throttledHandleMouseEnter.current = setTimeout(() => {
			fn()
			throttledHandleMouseEnter.current = null
		}, delay)
	}, [])

	const handleMouseEnter = () => {
		setIsHovered(prev=>!prev)
		dispatch(appActions.addHoveredCellPos({ rowIndex, cellIndex }))
	}

	const throttledMouseEnter = useCallback(() => {
		throttle(handleMouseEnter, 50)
	}, [throttle, handleMouseEnter])

	useEffect(() => {
		setIsHovered(false)
	}, [quizLevel])

	return (
		<div
			className={`quiz_area_cell${isHovered ? ' hovered' : ''}`}
			onMouseEnter={throttledMouseEnter}
		>
			<span />
		</div>
	)
}
