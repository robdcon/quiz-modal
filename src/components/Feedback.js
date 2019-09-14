import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap';

const StyledDiv = styled.div`
		
	
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



const Feedback = (props) =>
{
	return(

		<Tween from={.5, { y:'-100px', transform:'scale(0)'}}  duration={.5} ease={'ease-in-out'}>
			<StyledDiv className="feedback">

				<h3>{props.result}</h3>
				<p>{props.message}</p>
				{props.children}
				
			</StyledDiv>
		</Tween>
		

	)
}

export default Feedback