import React from 'react'

const index = ({questions, currentQuestion, handleAnswerOptionClick}) => {
    return (
        <div className="answer-section">
            {questions[currentQuestion]?.answers &&
                Object.entries(questions[currentQuestion]?.answers).map(([key, value]) => (
                    value && (
                        <button 
                            className='answer-options' 
                            key={key}
                            onClick={() => handleAnswerOptionClick(
                                    questions[currentQuestion]?.correct_answers[`${key}_correct`] === "true",
                                    value
                                )}
                            >
                            {value}
                        </button>
                    )
                ))}
        </div>
    )
}

export default index