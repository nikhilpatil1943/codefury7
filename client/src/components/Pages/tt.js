import React, { useState } from 'react';
import axios from 'axios';
import TestList from '../test/TestList';
import TakeTest from '../test/TakeTest';
import TestResult from '../test/TestResult';

const Testw = () => {
    const [currentTestId, setCurrentTestId] = useState(null);
    const [currentTest, setCurrentTest] = useState(null);
    const [answers, setAnswers] = useState([]);

    const handleStartTest = (testId) => {
        setCurrentTestId(testId);
    };

    const handleSubmitTest = (submittedAnswers) => {
        setAnswers(submittedAnswers);
        // Fetch the test data to calculate the score
        axios.get(`https://codefury7-1dg8.vercel.app/tests/${currentTestId}`)
            .then(response => setCurrentTest(response.data))
            .catch(error => console.error('Failed to fetch test', error));
    };

    return (
        <div>
            {currentTestId && !currentTest ? (
                <TakeTest testId={currentTestId} onSubmit={handleSubmitTest} />
            ) : currentTest ? (
                <TestResult test={currentTest} answers={answers} />
            ) : (
                <TestList onStartTest={handleStartTest} />
            )}
        </div>
    );
};

export default Testw;