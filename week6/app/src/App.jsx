import { useState } from 'react'
import './App.css'

function App() {

  const [questions, setQuestions] = useState([
    {
      id: 'a2z',
      number: 1,
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai"]
    },
    {
      id: 'a213',
      number: 2,
      question: "What is the largest ocean in the world?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"]
    }
  ]);

  const [answers, setAnswers] = useState({});

  function handleSubmitTest() {
    const submittedAnswers = {};

    questions.forEach(question => {
      const selectedOption = document.querySelector(`input[name="question-${CSS.escape(question.number)}"]:checked`);
      if (selectedOption) {
        submittedAnswers[question.id] = selectedOption.value;
      }
    });

    console.log("Submitted answers:", submittedAnswers);
  }

  return (
    <div className="App">
      {questions.map((q) => (
        <Question key={q.id} number={q.number} question={q.question} options={q.options} />
      ))
      }
      <button onClick={handleSubmitTest}>Submit Test</button>
    </div>
  )
}




function Question({number, question, options}) {

  return (
    <div className="question-container">
      <div className="question-content">
        <div className="question-number">{number}</div>
        <div className="question-text">
          <h2 className="question">{question}</h2>
        </div>
      </div>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index} className="option">
            <input type="radio" id={`option-${number}-${index}`} name={`question-${number}`} value={option} />
            <label htmlFor={`option-${number}-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;