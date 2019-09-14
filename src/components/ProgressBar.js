import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap';

const StyledBar = styled.div`
		
	
	width:100%;
    background-color: #ff000050;
   

`
const StyledBar = styled.div`	

	height:100%;
    width: 100%;
    background-color: #ffffff50;
    transform:scaleX(0);
    transform-origin: left;
    transition: transform 1s;
`


const ProgressBar = (props) =>
{
	return(

		<Tween from={.5, { y:'-100px', transform:'scale(0)'}} to={} duration={.5} ease={'ease-in-out'}>
			<StyledBar className="feedback">

				<div className="progress-container"><div className="progress-bar"></div></div>
				
			</StyledBar>
		</Tween>
		

	)
}

export default ProgressBar