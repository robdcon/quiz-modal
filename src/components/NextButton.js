import React from 'react'
import styled from 'styled-components'

const StyledNextButton = styled.button`
		
	height: 50px;
    width: 200px;
    margin: 2em;
    background-color: #42d742;
    box-shadow: 0px 4px 10px 1px #00000050;
    border: none;
    color: #fff;

`


const NextButton = (props) =>
{
	
		return(

			
			<div>
				<StyledNextButton className="btn next" onClick={props.handler} value={props.text}>
				<span>{props.text}</span>
				</StyledNextButton>	
			</div>

		)
	
}

export default NextButton