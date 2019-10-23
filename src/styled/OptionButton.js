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
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    text-align:center;

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



