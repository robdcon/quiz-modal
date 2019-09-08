import React, {Component} from 'react'
import OptionButton from '../components/OptionButton'
import Question from '../components/Question'
import OptionsList from '../components/OptionsList'
import QuestionContainer from '../components/QuestionContainer'
import Feedback from '../components/Feedback'


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
			currentQuestion: "Whats you name?",
			currentOptions: ["dunno", "what have you taken", "feck off"],
			currentIndex:0
		}
	}

	getCurrent()
	{
		let current = this.state.currentIndex
		return current
	}

	giveFeedback(e)
	{
		console.log(e)
		return e
		
	}

	setNextQuestion()
	{
		this.setState({

			currentIndex: this.state.currentIndex++
		})
	}


	componentDidMount()
	{
		let index = this.getCurrent()
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
					
					<Question  text={this.state.currentQuestion}/>
							
					<OptionsList>
					{

						this.state.currentOptions.map((option, key) =>
						(

							<OptionButton  key={"q=" + this.getCurrent() + "-o-" + key} handler={() => this.giveFeedback(option.feedback)} feedback={option.feedback} isTrue={option.isTrue} text={option.content} />
				
						))
					}
					</OptionsList>

					

				</QuestionContainer>
				
			</div>
		)
	}
}

export default QuizModal