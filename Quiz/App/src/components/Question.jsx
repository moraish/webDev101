
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';


export function Question({ id, question_id, question_text, options_text, selectedAns, setSelectedAns }) {

  
  function handleOptionSelect(event, question_id) {
    setSelectedAns(prevState => {
      // If the question_id already exists in selectedAns, update the answer
      if (prevState.hasOwnProperty(question_id)) {
        return {
          ...prevState,
          [question_id]: event.target.value
        };
      } else {
        // If the question_id does not exist, add it with the selected answer
        return {
          ...prevState,
          [question_id]: event.target.value
        };
      }
    });
  }

  


  return (  // console.log(selectedAns)
      <>
      <Paper elevation={3} style={{margin: '2rem', padding: '1rem', backgroundColor: 'whitesmoke'}}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem'}}>{id}. {question_text}</FormLabel>
        
        <RadioGroup row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(event) => handleOptionSelect(event, id)}>
          {options_text.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio />} label={option}/>
          ))}
        </RadioGroup>
        

      </FormControl>
      </Paper>
      <br />
      </>
  );
}


