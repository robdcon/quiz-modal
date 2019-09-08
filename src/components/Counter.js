import React from 'react'


const Counter = (props) =>
{
	
		return(

			
			<div>			
				<p className="counter" onClick={props.handler}>{props.count}/{props.total}</p>
			</div>

		)
	
}

export default Counter