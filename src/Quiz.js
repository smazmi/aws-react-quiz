import React, { useState } from 'react';
import quizData from './quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answerOptions.find(option => option.isCorrect).answerText;
    setSelectedAnswer(option.answerText);
    const correct = option.answerText === correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    // Delay moving to the next question to allow the user to see feedback
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null); // Reset for the next question
        setSelectedAnswer(''); // Reset selected answer
      } else {
        setShowScore(true);
      }
    }, 1000); // Adjust time as needed
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer('');
    setIsCorrect(null);
  };

  // const handleSignOut = () => {
  //   // Add sign out logic here, e.g., redirect to login page or clear user session
  //   alert('Signed out');
  // };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {quizData.length}
          <div className='restart-section'>
            <button className='restart-button' onClick={handleRestart}>Restart Quiz</button>
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text'>{quizData[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                style={{
                  backgroundColor: selectedAnswer === option.answerText 
                    ? (isCorrect ? '#006400' : '#800000') 
                    : ''
                }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <button className='signout-button' onClick={signOut}>
        <span className='transition'></span>
        <span className='gradient'></span>
        <span className='label'>Sign Out</span>
      </button>
    </div>
  );
}

export default Quiz;
