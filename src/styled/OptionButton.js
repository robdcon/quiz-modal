import styled from 'styled-components'
import React from 'react'

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

export const OptionButton = (props) =>
{
	
	return(
		
					
		<StyledButton  className="btn option" onClick={props.handler}>
			{props.text}
		</StyledButton>

	)
	
}

