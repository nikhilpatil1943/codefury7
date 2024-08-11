import React from 'react';

const TestResult = ({ test, answers }) => {
    console.log(test,answers)
    const calculateScore = () => {
        let score = 0;
        test.questions.forEach((question, index) => {
            console.log(answers[index])
            if (answers[index] === question.correctOption) {
                score += 1;
                // console.log()
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
