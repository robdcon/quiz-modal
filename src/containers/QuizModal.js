import React, {Component} from 'react'
import OptionButton from '../components/OptionButton'
import Question from '../components/Question'
import OptionsList from '../components/OptionsList'
import QuestionContainer from '../components/QuestionContainer'
import Feedback from '../components/Feedback'
import NextButton from '../components/NextButton'
import Counter from '../components/Counter'


class QuizModal extends Component 
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			active:true,
			questions: props.questions,
			answers:[],
			currentQuestion: props.questions[0].question,
			currentOptions: props.questions[0].options,
			selectedOptionFeedback: "",
			currentIndex:0,
			quizLength: props.questions.length
		}

		this.setNextQuestion = this.setNextQuestion.bind(this);
		this.incrementCurrent = this.incrementCurrent.bind(this);
	}

	// getCurrent()
	// {
	// 	let current = this.state.currentIndex
	// 	return current
	// }

	incrementCurrent()
	{
		
		this.setState((prevState) => ({
		
			currentIndex: prevState.currentIndex + 1
		}))
		this.setNextQuestion(this.state.currentIndex)

	}

	setFeedback(message)
	{
		this.setState({

			selectedOptionFeedback: message
		})
		
	}

	setNextQuestion(index)
	{
			
		this.setState({

			currentQuestion: this.state.questions[index].question,
			currentOptions: this.state.questions[index].options
		})
	}


	componentDidMount()
	{
		
		//this.setNextQuestion(0)
	}

			
	render()
	{
		return(

			<div  id="question-wrapper" className="quiz-modal">

				<QuestionContainer>
					
					<Question  text={this.state.currentQuestion}/>
							
					<OptionsList>
					{

						this.state.currentOptions.map((option, key) =>
						(

							<OptionButton  key={"q=" + this.state.currentIndex + "-o-" + key} handler={() => this.setFeedback(option.feedback)} feedback={option.feedback} isTrue={option.isTrue} text={option.content} />
				
						))
					}
					</OptionsList>

					
				</QuestionContainer>

				<Feedback message={this.state.selectedOptionFeedback} />
				<NextButton handler={this.incrementCurrent}/>
				<Counter  count={this.state.currentIndex} total={this.state.quizLength} />
				
			</div>
		)
	}
}

export default QuizModal