import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const numbers = [0,1,2,3,4,5,6,7,8,9,10]



function getStyles(name, category, theme) {
 
  return {
    fontWeight:
    category.indexOf(category) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) 
{
  const quizCategories = props.categories;
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({

    category:"",
    difficulty:"",
    quizType:"",
    numQuestions:""

  });

  const handleChange = (event) => 
  {
    const value = event.target.value
    const name = event.target.name
   

    setState({
      ...state,
      [name]:value
    });

    props.handler(name, value)
  };

  return (
    <div className={classes.root}>



      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select
         
          value={state.category}
          onChange={handleChange}
          input={<Input id="category" />}
          MenuProps={MenuProps}
          name="category"
        >
          {props.categories.map(category => (
            <MenuItem key={category.id} value={category.id} >
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
        <Select
         
          value={state.difficulty}
          onChange={handleChange}
          input={<Input id="difficulty" />}
          MenuProps={MenuProps}
          name="difficulty"
        >
          {props.difficulty.map((arr, i) => (
           
            <MenuItem key={i} value={arr} >
              {arr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="numQuestions">Quiz Length</InputLabel>
        <Select
         
          value={state.numQuestions}
          onChange={handleChange}
          input={<Input id="numQuestions" />}
          MenuProps={MenuProps}
          name="numQuestions"
        >
          {numbers.map((arr, i) => (
           
            <MenuItem key={i} value={arr} >
              {arr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

     
    </div>
  );
}