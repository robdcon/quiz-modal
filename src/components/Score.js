import React from 'react'

const Score = (props) =>
{
	
	return(

		
		<div>
			{props.children}			
			<p>{props.score}</p>
			
		</div>

	)
	
}

export default Score