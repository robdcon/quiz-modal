import React from 'react'
import {StyledQuestionContainer} from '../styled/StyledQuestionContainer'

const QuestionContainer = (props) => 
{
  return( 
		
			<StyledQuestionContainer className="question-container">
				{props.children}
			</StyledQuestionContainer> 
		
	)
}

export default QuestionContainer
