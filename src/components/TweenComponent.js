import React from 'react'
import { Tween, Timeline } from 'react-gsap';

export const TweenComponent = (props) =>
{
	return(

		<Tween from={{ x: '100px', rotation: -360 }}>
			{props.children}
		</Tween>
	)
}