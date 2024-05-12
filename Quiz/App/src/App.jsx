import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './components/Landing'
// import { FileInputComponent } from './components/fileInput'
import { Question } from './components/Question'
import Container from '@mui/material/Container';
import { QuizGenerator } from './components/QuizGenerator';

function App() {

  const [questionSet, setQuestionSet] = useState([{
    "id": 1,
    "question_text": "What is the capital of India?",
    "answer": "New Delhi",
    "options_text": ["New Delhi", "Mumbai", "Chennai", "Kolkata", "Shimla"]
  }, {
    "id": 2,
    "question_text": "What is the capital of USA?",
    "answer": "Washington",
    "options_text": ["New York", "Washington", "California", "Seattle"]
  }]);

  return (
    <>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />}/>
          <Route path="/quiz" element={<QuizGenerator questionSet={questionSet}/>} />
        </Routes>
      </BrowserRouter>
    </Container>
      
      
    </>
  )
}




export default App
