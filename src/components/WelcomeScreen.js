import React from 'react'
import styled from 'styled-components'



const WelcomeScreen = (props) =>
{
	
	return(

		
		<div className="welcome-screen">			
			<h1>{props.title}</h1>
			{props.children}
		</div>
		

	)
	
}

export default WelcomeScreen