import styled from 'styled-components'
import React , {Component} from 'react'
import { Tween, Timeline } from 'react-gsap';

const StyledButton = styled.button`
	
	width: 100%;
	font-family: Overpass;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    background-color: rgb(255, 255, 255);
    text-align: left;
    border-radius: 2px;
    border: 1px solid rgb(255, 255, 255);
    padding: 1em;
    margin: .125em auto;

`

export class OptionButton extends React.Component
{
	constructor(props)
	{
		super(props)
		this.btnRef = React.createRef()
	}

	render()
	{
		return(
		
			
			<StyledButton ref={this.btnRef} className="btn option" onClick={this.props.handler}>
			
				{this.props.text}
				{this.props.children}
			</StyledButton>
			
		

			)
	}
	
	
}



