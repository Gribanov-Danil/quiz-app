import React from 'react';
import './App.css';
import {QuizTemplate} from "./components/quizTemplate/QuizTemplate";
import {quizData} from "./utils/quizData";

function App() {
  return (
    <div className="App">
      <QuizTemplate quizData={quizData}/>
    </div>
  );
}

export default App;
