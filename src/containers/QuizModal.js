import React, {Component, useEffect, uesRef} from 'react'
import {OptionButton} from '../styled/OptionButton'
import Question from '../components/Question'
import OptionsList from '../components/OptionsList'
import QuestionContainer from '../components/QuestionContainer'
import Feedback from '../components/Feedback'
import NextButton from '../components/NextButton'
import Counter from '../components/Counter'
import WelcomeScreen from '../components/WelcomeScreen'
import Score from '../components/Score'
import {StyledModal} from '../styled/StyledModal'
import {TweenComponent} from '../components/TweenComponent'
import TweenLite from "gsap";
import { Tween, Timeline } from 'react-gsap'
import axios from 'axios'
import {negativeFeedbackMessages, positiveFeedbackMessages} from '../api/FeedbackMessages'
import MultipleSelect from '../components/MultipleSelect'



//import {StyledButton} from '../styled/StyledButton'


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
			questionResultMessage: "",
			quizFinished: false,
			// questions: props.questions,
			selectedAnswers: [],
			correctAnswers: [],
			incorrectAnswers: [],
			currentQuestion: "",
			currentOptions: [],
			currentCorrectAnswer: "",
			selectedOptionFeedback: "",
			currentIndex:-1,
			quizLength: 5,
			score: 0,
			tween: TweenLite,
			btnElements:[],
			animateOptions: true,
			feedbackMessages:"",
			feedbackActive: false,
			feedbackType: 'negative',
			guesses: 0,
			difficulties: [
				'easy',
				'medium',
				'hard'
			],
			categories:[],
			quizTypes:["Multiple"],
			numbers:[1,2,3, ...10],
			category:10,
			difficulty:"easy",
			quizType: "multiple",
			numQuestions:5,
			trivia: null

			
			
		}
		
		this.myElements = []
		this.setNextQuestion = this.setNextQuestion.bind(this);
		this.incrementCurrent = this.incrementCurrent.bind(this);
		this.resetQuiz = this.resetQuiz.bind(this);
		this.startQuiz = this.startQuiz.bind(this);
		
	}

	

	resetQuiz()
	{		
	
		this.setState({

			trivia:null,
			feedbackMessages: positiveFeedbackMessages[0],
			active:false,
			quizFinished: false,
			currentIndex:-1
		})
		
	}

	async getQuiz()
	{
		const numQuestions = this.state.numQuestions
		const category = this.state.category
		const difficulty = this.state.difficulty
		const quizType = this.state.quizType

		const triviaUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${quizType}&encode=url3986`
		
		const Trivia = await axios.get(triviaUrl)
		console.log('getQuiz')
		return Trivia

		
	}

	setQuizCriteria = (name, value) =>
	{
		console.log('CRITERIA', name, value)
		this.setState({
			
			[name]:value
		})
	}

	async startQuiz()
	{
		const triviaData = await this.getQuiz()
		.then((res) => 
		{
			console.log('set trivia')
			this.setState({

				trivia: res.data.results
			})
			
		})
		.then(() => this.setNextQuestion(this.state.currentIndex + 1))
		.then(() =>
		{
			console.log('set active')
			console.log(this.state.trivia)
			console.log('StartQuiz')
			this.setState({

				active: true,
				currentIndex: 0,
				animateOptions: true
			})
			
		})
			
		// 	triviaData.then((res) => {
				
		// 		
		// })	
		
		
		
	}
	
	incrementCurrent()
	{

		this.setState((prevState) => ({
		
			currentIndex: prevState.currentIndex + 1,
			selectedOptionFeedback: "",
			active: prevState.currentIndex + 1 === this.state.numQuestions ? false : true,
			quizFinished: prevState.currentIndex + 1 === this.state.numQuestions ? true : false,
			animateOptions: true,
			feedbackActive:false,
			currentQuestion: prevState.currentIndex + 1 === this.state.numQuestions ? "" : this.state.trivia[prevState.currentIndex + 1].question,
			currentOptions:  prevState.currentIndex + 1 === this.state.numQuestions ? [] : this.shuffle([...this.state.trivia[prevState.currentIndex + 1].incorrect_answers, this.state.trivia[prevState.currentIndex + 1].correct_answer]),
			currentCorrectAnswer:  prevState.currentIndex + 1 === this.state.numQuestions ? "" :  this.state.trivia[prevState.currentIndex + 1].correct_answer,
			guesses: 0


		}))

		//this.setNextQuestion(this.state.currentIndex)




	}

	shuffle(array) 
	{
		var currentIndex = array.length, temporaryValue, randomIndex;
	  
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
	  
		  // And swap it with the current element.
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
	  
		return array;
	}

	randomNumber(max)
	{
		let random = 0
		do
		{
			random = Math.floor(Math.random() * 10)
			
		}
		while(random >= max)
		console.log("random: ", random)
		return random
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
		console.log('right answer')
	}

	incrementScore()
	{
		this.setState((prevState) => ({

			score: prevState.score + 1
		}))
	}

	incrementGuesses()
	{
		this.setState((prevState) => ({

			guesses: prevState.guesses + 1
		}))
	}

	addClassToButton(e, boolean)
	{
		console.log(e)
		boolean ? e.classList.add('correct') : e.classList.add('incorrect')
		e.classList.add('selected')
	}

	setQuestionResultMessage(boolean)
	{
		this.setState({
			questionResultMessage: boolean ? 'Correct' : 'Incorrect'
		})
	}

	handleResponse = (e, boolean, response) =>
	{
		console.log(boolean)
		let message = boolean ? positiveFeedbackMessages[this.randomNumber(positiveFeedbackMessages.length)][this.setFeedbackMessage(this.state.guesses)] :
								negativeFeedbackMessages[this.randomNumber(negativeFeedbackMessages.length)][this.setFeedbackMessage(this.state.guesses)]

		boolean ? this.addToCorrectAnswers() : this.addToIncorrectAnswers()
		this.setFeedback(message)
		this.addClassToButton(e.target, boolean)
		this.setQuestionResultMessage(boolean)
		this.setState({feedbackActive:true})
		this.incrementGuesses()
	}

	setNextQuestion(index)
	{
			
		this.setState({

			currentQuestion: this.state.trivia[index].question,
			currentOptions: this.state.trivia[index].incorrect_answers,
			currentOptions:  this.state.currentIndex + 1 === this.state.numQuestions ? [] : this.shuffle([...this.state.trivia[this.state.currentIndex + 1].incorrect_answers, this.state.trivia[this.state.currentIndex + 1].correct_answer]),
			currentCorrectAnswer:  this.state.currentIndex + 1 === this.state.numQuestions ? "" :  this.state.trivia[this.state.currentIndex + 1].correct_answer

		})
	}

	setFeedbackMessage(guesses) // Sets harshness of response according to number of guesses
	{
		let message
		switch(guesses)
		{

			case 0: message = 'soft'; break;
			case 1: message = 'fair'; break;
			case 2: message = 'strong'; break;
			case 3: message = 'harsh'; break;
			case 4: message = 'offensive'; break;
			default: message = 'offensive'

		}
		return message
	}

	reset()
	{
		this.myElements = []
	}

	getScore()
	{
		return this.state.correctAnswers.length
	}

	animateOptions()
	{
		
		
		// this.reset()
		console.log(this.myElements)
		TweenLite.staggerFrom('.option', .5, {y:'100px', opacity:0}, .05)
		this.setState({

			animateOptions:false
		})

		
	}

	getCategories()
	{
		const catUrl = 'https://opentdb.com/api_category.php'
		const CategoryList = axios.get(catUrl)
		CategoryList.then((res)=>
		{
			this.setState({
				categories:res.data.trivia_categories
			})
		})
	}

	// Set parameters for quiz API
	
	
	componentDidMount()
	{	

		this.getCategories()
		
		// const triviaUrl = `https://opentdb.com/api.php?category=${this.state.category}amount=10&type=multiple&encode=url3986`
		// const Trivia = axios.get(triviaUrl)

		// console.log(Trivia)

		// Trivia.then((res) => this.setState({

		// 	trivia:res.data.results,
		// 	quizLength: res.data.results.length,
		// 	feedbackMessages: positiveFeedbackMessages[0]
		// }))

		

	}


	componentDidUpdate()
	{

			
		if (this.state.animateOptions)
			{this.animateOptions()}
		
		console.log('Component Update')	
	
	}

			
	render()
	{
		//if(this.state.active){console.log('hello')}
		return(
			
			<StyledModal>						
			{

				this.state.active ? ( 
				
				(this.state.trivia !== null) ?  
				
				<QuestionContainer>
										
					<Question  text={decodeURIComponent(this.state.currentQuestion)}/>
							
					<OptionsList>
					{
						this.state.currentOptions.map((option, key) =>
						(

							<OptionButton 

								key={"q=" + this.state.currentIndex + "-o-" + key} 
								feedback={option.feedback} 
								handler={(e) => {let isTrue = (option === this.state.currentCorrectAnswer ? true : false); this.handleResponse(e, isTrue, option.feedback)  } } 
								isTrue={option === this.state.currentCorrectAnswer ? true : false} 
								text={decodeURIComponent(option)}>

							</OptionButton>
							
						))
						
					
					}
					</OptionsList>


					{this.state.feedbackActive ? <Feedback result={this.state.questionResultMessage} message={this.state.selectedOptionFeedback} /> : <div></div>}
					
					<NextButton  text="NEXT" handler={this.incrementCurrent}/>

					<Counter  count={this.state.currentIndex} total={this.state.quizLength} /> 

				</QuestionContainer> : 
				
				<div>Loading...</div>
					) : 
					<div className="welcome-screen">
						{
							
							this.state.quizFinished ? 
							(	
								<div>
								<WelcomeScreen title={ this.state.quizFinished ? this.state.resultMessage : this.state.welcomeMessage } />
								<Score score={this.getScore()}>
									<h2>Your score is</h2>
								</Score>
								<NextButton  text="START AGAIN" handler={this.resetQuiz}/>
								</div>
								
							) : 

							(
								<div>
								<WelcomeScreen title={ this.state.quizFinished ? this.state.resultMessage : this.state.welcomeMessage } />
									<MultipleSelect  
										handler={this.setQuizCriteria} 
										difficulty={this.state.difficulties} 
										categories={this.state.categories} 
										numbers={this.state.numbers} 
										quizTypes={this.state.quizTypes}
									>

									</MultipleSelect>
								<NextButton  text="START" handler={this.startQuiz}/>
								</div>
							)
						}
					</div>
				}
				

			</StyledModal>
			
		)
	}
}

export default QuizModal