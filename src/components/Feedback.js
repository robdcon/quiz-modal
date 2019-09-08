import React from 'react'

const Feedback = (props) =>
{
	return(

		<div className="feedback">

			<h3>{props.isTrue ? "Well done! That's Correct" : "Sorry thats incorrect"}</h3>
			<p>{props.message}</p>
			{props.children}
			
		</div>

	)
}

export default Feedback