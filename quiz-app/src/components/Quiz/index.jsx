import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import AnswerSection from '../AnswerSection'

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const fetchQuestions = async() => {
    const response = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_QUIZ_API_KEY}&limit=10&category=code`);
    setQuestions(response.data);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = (isCorrect, answer) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePlayAgainClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswers([]);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}</h2>
          <button className='playAgain-btn' onClick={handlePlayAgainClick}>Play Again</button>
        </div>
      ) : (
        <>
          {questions.length > 0 ?
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion]?.question}</div>
              </div>
              <AnswerSection questions={questions} currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick} />
              <div className="navigation-buttons">
                {currentQuestion > 0 && (
                  <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>
                )}
                {currentQuestion < questions.length - 1 && (
                  <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
                )}
              </div>
            </>
            :
            <p>Loading...</p>
          }
        </>
      )}
    </div>
  );
};

export default QuizApp;
