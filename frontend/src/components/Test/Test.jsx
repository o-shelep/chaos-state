import React from "react";

import useTestLogic from "../../hooks/useTest";
import styles from "./Test.module.css";

function Test() {
    const {
        testData,
        currentQuestion,
        currentQuestionIndex,
        selectedAnswerIndex,
        handleAnswerSelection,
        handleNextQuestion,
        handlePreviousQuestion,
    } = useTestLogic();

    if (!testData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.testContainer}>
            <div className={styles.testBlock}>
                <div className={styles.title}>
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className={styles.answers}>
                    {currentQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            className={
                                selectedAnswerIndex === index
                                    ? `${styles.answer} ${styles.selected}`
                                    : styles.answer
                            }
                            onClick={() => handleAnswerSelection(index)}
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
