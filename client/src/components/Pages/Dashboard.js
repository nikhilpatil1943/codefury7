import React, { useState } from 'react';
import axios from 'axios';
import styles from './dashboard.css';  // Import the CSS Module

const Dashboard = () => {
    const [formType, setFormType] = useState('alert'); // State to switch between forms
    const [alertType, setAlertType] = useState('red');
    const [description, setDescription] = useState('');
    const [district, setDistrict] = useState('');

    const [questions, setQuestions] = useState([
        { question: '', options: ['', '', ''], correctOption: null }
    ]);

    // Handle form type switch
    const handleFormSwitch = (type) => {
        setFormType(type);
        // Reset states when switching forms
        if (type === 'alert') {
            setQuestions([{ question: '', options: ['', '', ''], correctOption: null }]);
        }
    };

    // Handle alert form submission
    const handleAlertSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('codefury7-1dg8.vercel.app/createalert', {
                alertType,
                description,
                district
            });
            alert('Alert created successfully');
        } catch (error) {
            console.error('Error creating alert:', error);
            alert('Failed to create alert');
        }
    };

    // Handle test form submission
    const handleTestSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('codefury7-1dg8.vercel.app/createtest', { questions });
            alert('Test created successfully');
        } catch (error) {
            console.error('Error creating test:', error);
            alert('Failed to create test');
        }
    };

    // Handle question change
    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    // Handle option change
    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    // Handle correct option selection
    const handleCorrectOptionChange = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].correctOption = optionIndex;
        setQuestions(newQuestions);
    };

    // Add a new question
    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', ''], correctOption: null }]);
    };

    return (
        <div className={styles.appContainer}>
            <div className={styles.formSelector}>
                <button onClick={() => handleFormSwitch('alert')}>Create Alert</button>
                <button onClick={() => handleFormSwitch('test')}>Create Test</button>
            </div>
            {formType === 'alert' ? (
                <div className={styles.card}>
                    <h2>Create Alert</h2>
                    <form onSubmit={handleAlertSubmit}>
                        <label>
                            Alert Type:
                            <select value={alertType} onChange={(e) => setAlertType(e.target.value)}>
                                <option value="red">Red Alert</option>
                                <option value="orange">Orange Alert</option>
                                <option value="yellow">Yellow Alert</option>
                            </select>
                        </label>
                        <label>
                            Description:
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter alert description"
                            />
                        </label>
                        <label>
                            District:
                            <input
                                type="text"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                placeholder="Enter district"
                            />
                        </label>
                        <button type="submit">Create Alert</button>
                    </form>
                </div>
            ) : (
                <div className={styles.card}>
                    <h2>Create Test</h2>
                    <form onSubmit={handleTestSubmit}>
                        {questions.map((q, questionIndex) => (
                            <div key={questionIndex}>
                                <label>
                                    Question:
                                    <input
                                        type="text"
                                        value={q.question}
                                        onChange={(e) => handleQuestionChange(questionIndex, e)}
                                        placeholder="Enter question"
                                    />
                                </label>
                                {q.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className={styles.optionContainer}>
                                        <label>
                                            Option {optionIndex + 1}:
                                            <input
                                                type="text"
                                                value={option}
                                                onChange={(e) => handleOptionChange(questionIndex, optionIndex, e)}
                                                placeholder={`Enter option ${optionIndex + 1}`}
                                            />
                                        </label>
                                        <input
                                            type="radio"
                                            name={`correctOption-${questionIndex}`}
                                            checked={q.correctOption === optionIndex}
                                            onChange={() => handleCorrectOptionChange(questionIndex, optionIndex)}
                                        />
                                        <span>Correct</span>
                                    </div>
                                ))}
                                <br />
                            </div>
                        ))}
                        <button type="button" onClick={addQuestion}>Add More Questions</button>
                        <button type="submit">Submit Test</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
