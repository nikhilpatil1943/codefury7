import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestList = ({ onStartTest }) => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await axios.get('https://codefury7-1dg8.vercel.app/tests');
                setTests(response.data);
            } catch (error) {
                console.error('Failed to fetch tests', error);
            }
        };
        fetchTests();
    }, []);

    return (
        <div>
            <h2>Available Tests</h2>
            <ul>
                {tests.map((test, index) => (
                    <li key={test._id}>
                        {`Test ${index + 1}`} 
                        <button onClick={() => onStartTest(test._id)}>Start Test</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestList;
