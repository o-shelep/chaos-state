import React, { useState } from "react";
import styles from "./Test.module.css";

function Test() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const testData = {
        testBlocks: [
            {
                question: "What is your favorite color?",
                answers: ["Red", "Blue", "Green", "Yellow"],
            },
            {
                question: "Which animal do you prefer?",
                answers: ["Dog", "Cat", "Bird", "Fish"],
            },
            {
                question: "What is your favorite season?",
                answers: ["Winter", "Spring", "Summer", "Autumn"],
            },
        ],
    };

    const handleAnswerSelection = (index) => {
        setSelectedAnswerIndex(index);
    };

    const handleNextQuestion = () => {
        if (selectedAnswerIndex !== null) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerIndex(null);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswerIndex(null);
        }
    };

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
