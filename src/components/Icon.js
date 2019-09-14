import React from 'react'
import styled from 'styled-components'

const StyledIcon = span`
		
		height:50px;
		width: 50px;
		position:absolute;
		right:5px;

`

const Icon = (props) =>
{
	return(

		<span className="icon">

			{props.children}
			
		</span>

	)
}

export default Icon