import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap';


const StyledBar = styled.div`	

	height:30px;
	width: 100%;
    margin: 2em 0;
    border-radius: 50px;
    background-color: #78787850;
    transform-origin: left;
    transition: transform 1s;
`


const ProgressBar = (props) =>
{
	return(

		<Tween from={{transform:`scaleX(${props.oldScale})`}} to={{transform:`scaleX(${props.newScale})`}} duration={.5} ease={'ease-in-out'}>
			<StyledBar className="progress-bar">
				<div className="progress-container">
					<div className="progress-bar"></div>
					</div>
			</StyledBar>
		</Tween>
		

	)
}

export default ProgressBar