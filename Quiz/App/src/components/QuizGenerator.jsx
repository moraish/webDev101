
import * as React from 'react';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Question } from './Question'

export function QuizGenerator( {questionSet} ) {

    const [selectedAns, setSelectedAns] = useState([{}]);

    function calculateResult() {
        // console.log('aaaa')
        let score = 0;
      
        // Iterate over each question in the questionSet
        questionSet.forEach(question => {
          // Check if the selected answer matches the correct answer for the question
          if (selectedAns.hasOwnProperty(question.id) && selectedAns[question.id] === question.answer) {
            score++; // Increment the score if the answer is correct
          }
        });
      
        // Display the score or perform any other action with it
        console.log("The result is", score);
      }
      


    return (
        <>
        {questionSet.map(question => (
            <Question
                key={question.id}
                id={question.id}
                question_text={question.question_text}
                options_text={question.options_text}
                selectedAns = {selectedAns}
                setSelectedAns = {setSelectedAns}
                
                
                />
        ))}

        <Button variant="contained" onClick={calculateResult} style={{margin: '2rem', padding: '1rem'}}>Submit Quiz</Button>
        </>     
    )
}

