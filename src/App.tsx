import React from 'react'

import { QuizContainer } from '@components/QuizContainer'
import { QuizHeader } from '@components/QuizHeader/QuizHeader'
import { QuizLevelSelector } from '@components/QuizHeader/QuizHeaderOptions/QuizLevelSelector'
import { QuizGameTrigger } from '@components/QuizHeader/QuizHeaderOptions/QuizGameTrigger'
import { QuizBody } from '@components/QuizBody/QuizBody'
import { QuizArea } from '@components/QuizBody/QuizArea/QuizArea'
import { QuizCoordinates } from '@components/QuizBody/QuizArea/QuizCoords/QuizCoordinates'

const App: React.FC = () => {
	return (
		<>
			<QuizContainer>

				<QuizHeader>
					<QuizLevelSelector />
					<QuizGameTrigger />
				</QuizHeader>

				<QuizBody>
					<QuizArea />
					<QuizCoordinates />
				</QuizBody>
				
			</QuizContainer>
		</>
	)
}

export default App
