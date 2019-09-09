import React, {Component} from 'react'
import OptionButton from '../components/OptionButton'
import Question from '../components/Question'
import OptionsList from '../components/OptionsList'
import QuestionContainer from '../components/QuestionContainer'
import Feedback from '../components/Feedback'
import NextButton from '../components/NextButton'
import Counter from '../components/Counter'
import WelcomeScreen from '../components/WelcomeScreen'
import Score from '../components/Score'


class QuizModal extends Component 
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			active:false,
			welcomeMessage: "Welcome",
			resultMessage: "Finished",
			quizFinished: false,
			questions: props.questions,
			selectedAnswers: [],
			correctAnswers: [],
			incorrectAnswers: [],
			currentQuestion: props.questions[0].question,
			currentOptions: props.questions[0].options,
			selectedOptionFeedback: "",
			currentIndex:-1,
			quizLength: props.questions.length,
			score: 0
		}

		this.setNextQuestion = this.setNextQuestion.bind(this);
		this.incrementCurrent = this.incrementCurrent.bind(this);
	}
	
	incrementCurrent()
	{
		
		this.setState((prevState) => ({
		
			currentIndex: prevState.currentIndex + 1,
			selectedOptionFeedback: "",
			active: prevState.currentIndex + 1 === this.state.quizLength ? false : true,
			quizFinished: prevState.currentIndex + 1 === this.state.quizLength ? true : false

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

	addClassToButton(e, boolean)
	{
		console.log(e)
		boolean ? e.classList.add('correct') : e.classList.add('incorrect')
		e.classList.add('selected')
	}

	handleResponse = (e, boolean, response) =>
	{
		console.log(boolean)
		boolean ? this.addToCorrectAnswers() : this.addToIncorrectAnswers()
		this.setFeedback(response)
		this.addClassToButton(e.target, boolean)
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
		//if(this.state.active){console.log('hello')}
		return(

				<div  id="question-wrapper" className="quiz-modal">
						
					{
					this.state.active ? ( <QuestionContainer>
										
					<Question  text={this.state.questions[this.state.currentIndex].question}/>
							
					<OptionsList>
					{

						this.state.questions[this.state.currentIndex].options.map((option, key) =>
						(

							<OptionButton  key={"q=" + this.state.currentIndex + "-o-" + key} feedback={option.feedback} handler={(e) => {this.handleResponse(e, option.isTrue, option.feedback)  } } isTrue={option.isTrue} text={option.content} />
				
						))
					}
					</OptionsList>

					<Feedback message={this.state.selectedOptionFeedback} />
					<NextButton handler={this.incrementCurrent}/>
					<Counter  count={this.state.currentIndex} total={this.state.quizLength} /> 

					</QuestionContainer>
					) : 
					<div className="welcome-screen">
						{
							
							this.state.quizFinished ? 
							(	
								<div>
								<WelcomeScreen title={ this.state.quizFinished ? this.state.resultMessage : this.state.welcomeMessage } />
								<Score score={this.state.score} />
								</div>
								
							) : 

							(
								<div>
								<WelcomeScreen title={ this.state.quizFinished ? this.state.resultMessage : this.state.welcomeMessage } />
								<NextButton handler={this.incrementCurrent} />
								</div>
							)
						}
					</div>
				}
				</div>
			
			
		)
	}
}

export default QuizModal