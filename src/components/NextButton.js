import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const StyledNextButton = styled.button`
		
	height: 50px;
    width: 200px;
    margin: 2em;
  
    box-shadow: 0px 4px 10px 1px #00000050;
    border: none;
	color: #fff;
	color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    

`
const useStyles = makeStyles(theme => ({
	margin: {
	  margin: theme.spacing(2),
	},
	extendedIcon: {
	  marginRight: theme.spacing(2),
	},
  }));

const NextButton = (props) =>
{
	const classes = useStyles();
	
		return(

			
			<div>
				
				<Button className={classes.margin} size="large"  variant="contained" onClick={props.handler} value={props.text}>
				
				<span>{props.text}</span>
				
				</Button>
				
			</div>

		)
	
}

export default NextButton