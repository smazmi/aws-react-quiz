import React, { useState } from 'react';
import quizData from './quizData';
import { signOut } from 'aws-amplify/auth';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
<<<<<<< HEAD
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleSignOut = () => {
    // Add sign out logic here, e.g., redirect to login page or clear user session
    alert("Signed out");
=======
>>>>>>> d31f24fcbd886168074c7990ac8f74b273a5b738
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  // const handleSignOut = () => {
  //   // Add sign out logic here, e.g., redirect to login page or clear user session
  //   alert("Signed out");
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
<<<<<<< HEAD
        
=======

>>>>>>> d31f24fcbd886168074c7990ac8f74b273a5b738
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text'>{quizData[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
<<<<<<< HEAD
    
      <button 
        className='signout-button' 
        onClick={handleSignOut}
=======

      <button
        className='signout-button'
        onClick={signOut}
>>>>>>> d31f24fcbd886168074c7990ac8f74b273a5b738
      >
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">Sign Out</span>
      </button>
    </div>
  );
}

export default Quiz;