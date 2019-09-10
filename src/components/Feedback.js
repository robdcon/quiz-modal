import React from 'react'

const Feedback = (props) =>
{
	return(

		<div className="feedback">

			<h3>{props.result}</h3>
			<p>{props.message}</p>
			{props.children}
			
		</div>

	)
}

export default Feedback