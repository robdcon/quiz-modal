import React from 'react'

const OptionsList = (props) =>
{
	return(

		<div>
			<ul className="option-list">
				{props.children}
			</ul>
		</div>

	)
}

export default OptionsList