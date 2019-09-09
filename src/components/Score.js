import React from 'react'

const Score = (props) =>
{
	
	return(

		
		<div>			
			<p>{props.score}</p>
			{props.children}
		</div>

	)
	
}

export default Score