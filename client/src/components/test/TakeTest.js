import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TakeTest = ({ testId, onSubmit }) => {
    const [test, setTest] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchTest = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/tests/${testId}`);
                setTest(response.data);
                setAnswers(Array(response.data.questions.length).fill(null));
            } catch (error) {
                console.error('Failed to fetch test', error);
            }
        };
        fetchTest();
    }, [testId]);

    const handleOptionChange = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        onSubmit(answers);
    };

    if (!test) return <div>Loading...</div>;

    return (
        <div>
            <h2>Take Test</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {test.questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <h3>{question.question}</h3>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={optionIndex}
                                    onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                    checked={answers[questionIndex] === optionIndex}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit Test</button>
            </form>
        </div>
    );
};

export default TakeTest;
