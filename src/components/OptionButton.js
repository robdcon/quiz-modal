import React from 'react'


const OptionButton = (props) =>
{
	
		return(

			
			<div>			
				<button  className="btn option" onClick={props.handler}>{props.text}</button>
			</div>

		)
	
}

export default OptionButton