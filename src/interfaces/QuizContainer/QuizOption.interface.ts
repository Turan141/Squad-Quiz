import { ReactNode } from "react";

export interface QuizOption {
  name: string;
  field: number;
  id: string;
}

export interface ReactChildrenProps {
	children: ReactNode
}

export interface QuizLevelOptionProps {
	level: QuizOption
	onSelectLevel?: (field: number) => void
	isPlaceholder?: boolean
}

export interface QuizCellProps {
	cell: number
	rowIndex:number
	cellIndex:number
}

export interface QuizCordsProps {
	row:number
	col:number
}

export interface CellDataPosition {
	rowIndex: any;
	cellIndex: any;
	row: number
	column: number
}

export interface InitialState {
	quizOptions: any
	quizLevel: number
	quizStatus: 'stopped' | 'started'
	hoveredCells: CellDataPosition[]
}