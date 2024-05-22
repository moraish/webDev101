import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './components/Landing'
// import { FileInputComponent } from './components/fileInput'
import { Question } from './components/Question'
import Container from '@mui/material/Container';
import { QuizGenerator } from './components/QuizGenerator';
import questions from './data/questions';

function App() {

  const [questionSet, setQuestionSet] = useState(questions);

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
