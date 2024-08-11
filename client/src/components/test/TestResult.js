import React from 'react';

const TestResult = ({ test, answers }) => {
    const calculateScore = () => {
        let score = 0;
        test.questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                score += 1;
            }
        });
        return score;
    };

    const score = calculateScore();

    return (
        <div>
            <h2>Test Result</h2>
            <p>Your score: {score} / {test.questions.length}</p>
        </div>
    );
};

export default TestResult;
