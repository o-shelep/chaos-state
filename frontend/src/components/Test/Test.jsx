import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Test.module.css"; // Adjust your styles as needed

function Test() {
    const { testId } = useParams();
    const navigate = useNavigate();
    const [testData, setTestData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    useEffect(() => {
        if (!testId) {
            console.error("No test ID provided.");
            return; // Exit early if testId is not defined
        }

        const fetchTestData = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve the token from local storage
                const response = await fetch(`http://localhost:5000/tests/${testId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Include the token
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch test data: ${response.status} ${errorText}`);
                }

                const { data } = await response.json();
                setTestData(data.test);
            } catch (error) {
                console.error("Error fetching test data: ", error);
                // Optionally redirect or show an error message
            }
        };

        fetchTestData();
    }, [testId]);

    const handleAnswerSelection = (index) => {
        setSelectedAnswerIndex(index);
    };

    const handleNextQuestion = () => {
        if (selectedAnswerIndex === null) {
            alert("Please select an answer before proceeding.");
            return;
        }
        if (currentQuestionIndex < testData.testBlocks.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerIndex(null);
        } else {
            navigate(`/results/${testId}`);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswerIndex(null);
        }
    };

    if (!testData) {
        return <div>Loading...</div>;
    }

    const currentQuestion = testData.testBlocks[currentQuestionIndex];

    return (
        <div className={styles.testContainer}>
            <div className={styles.testBlock}>
                <div className={styles.title}>
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className={styles.answers}>
                    {currentQuestion.answers.map((answer, idx) => (
                        <button
                            key={idx}
                            className={
                                selectedAnswerIndex === idx
                                    ? `${styles.answer} ${styles.selected}`
                                    : styles.answer
                            }
                            onClick={() => handleAnswerSelection(idx)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.btnContainer}>
                {currentQuestionIndex > 0 && (
                    <div className={styles.previousBtn}>
                        <button onClick={handlePreviousQuestion}>назад</button>
                    </div>
                )}
                <div className={styles.submitBtn}>
                    <button
                        onClick={handleNextQuestion}
                        disabled={selectedAnswerIndex === null}
                    >
                        {currentQuestionIndex < testData.testBlocks.length - 1
                            ? "далі"
                            : "завершити"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Test;
