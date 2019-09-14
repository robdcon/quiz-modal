import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap';

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