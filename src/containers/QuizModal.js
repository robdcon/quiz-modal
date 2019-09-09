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
			selectedAnswers: [],
			correctAnswers: [],
			incorrectAnswers: [],
			currentQuestion: props.questions[0].question,
			currentOptions: props.questions[0].options,
			selectedOptionFeedback: "",
			currentIndex:0,
			quizLength: props.questions.length,
			score: 0
		}

		this.setNextQuestion = this.setNextQuestion.bind(this);
		this.incrementCurrent = this.incrementCurrent.bind(this);
	}
	
	incrementCurrent()
	{
		
		this.setState((prevState) => ({
		
			currentIndex: prevState.currentIndex + 1 >= this.state.quizLength ? 0 : prevState.currentIndex + 1 
		}))

	}

	setFeedback(message)
	{
		this.setState({

			selectedOptionFeedback: message
		})
		
	}

	setResult(boolean)
	{
		this.setState({

			selectionResult: boolean
		})
	}

	addToIncorrectAnswers()
	{

		this.setState((prevState) => ({

			incorrectAnswers: !this.state.incorrectAnswers.includes(this.state.currentIndex) && !this.state.correctAnswers.includes(this.state.currentIndex) ? [...this.state.incorrectAnswers, this.state.currentIndex] : this.state.incorrectAnswers
		}))
		console.log('wrong answer')
	}

	addToCorrectAnswers()
	{

		this.setState((prevState) => ({

			correctAnswers: !this.state.correctAnswers.includes(this.state.currentIndex) && !this.state.incorrectAnswers.includes(this.state.currentIndex) ? [...this.state.correctAnswers, this.state.currentIndex] : this.state.correctAnswers
		}))
		console.log('wrong answer')
	}

	incrementScore()
	{
		this.setState((prevState) => ({

			score: prevState.score + 1
		}))
	}

	handleResponse = (boolean, response) =>
	{
		console.log(boolean)
		boolean ? this.addToCorrectAnswers() : this.addToIncorrectAnswers()
		this.setFeedback(response)
	}

	setNextQuestion(index)
	{
			
		this.setState({

			currentQuestion: this.state.questions[index].question,
			currentOptions: this.state.questions[index].options
		})
	}

			
	render()
	{
		return(

			<div  id="question-wrapper" className="quiz-modal">

				<QuestionContainer>
					
					<Question  text={this.state.questions[this.state.currentIndex].question}/>
							
					<OptionsList>
					{

						this.state.questions[this.state.currentIndex].options.map((option, key) =>
						(

							<OptionButton  key={"q=" + this.state.currentIndex + "-o-" + key} feedback={option.feedback} handler={() => this.handleResponse(option.isTrue, option.feedback)} isTrue={option.isTrue} text={option.content} />
				
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