import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createTest } from "../../services/testService"; 
import styles from "./CreateTest.module.css";

function CreateTest() {
    const [testName, setTestName] = useState("");
    const [description, setDescription] = useState("");
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [numberResults, setNumberResults] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [authorId, setAuthorId] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setAuthorId(decodedToken._id);
        }
    }, []);

    const handleTestInfoChange = (e) => {
        const { name, value } = e.target;
        if (name === "testName") setTestName(value);
        if (name === "description") setDescription(value);
    };

    const handleQuestionInfoChange = (e) => {
        const { name, value } = e.target;
        if (name === "numQuestions") {
            setNumberQuestions(Number(value));
            setQuestions(Array.from({ length: Number(value) }, () => ({})));
        } else if (name === "numResults") {
            setNumberResults(Number(value));
            setResults(Array.from({ length: Number(value) }).fill(""));
        }
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleResultChange = (index, value) => {
        const updatedResults = [...results];
        updatedResults[index] = value;
        setResults(updatedResults);
    };

    const handleNextStep = () => setCurrentStep((previousStep) => previousStep + 1);
    const handleBackStep = () => setCurrentStep((previousStep) => previousStep - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const testData = {
            name: testName,
            description,
            numberOfQuestions: numberQuestions,
            numberOfResults: numberResults,
            testBlocks: questions.map((q) => ({
                question: q.question,
                answers: [q.answer1, q.answer2, q.answer3],
            })),
            author: authorId,
            results,
        };

        try {
            const token = localStorage.getItem("token");
            await createTest(testData, token); // Use the service to make the API call
            navigate("/me");
        } catch (error) {
            console.error("Error creating test:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.createTestForm}>
            {currentStep === 1 && (
                <div className={styles.testInfo}>
                    <h2>створити тест</h2>
                    <label>
                        назва тесту:
                        <input
                            type="text"
                            name="testName"
                            value={testName}
                            onChange={handleTestInfoChange}
                            required
                        />
                    </label>
                    <label>
                        опис тесту:
                        <textarea
                            name="description"
                            value={description}
                            onChange={handleTestInfoChange}
                            required
                        />
                    </label>
                    <button type="button" onClick={handleNextStep} className={styles.nextInfoBtn}>
                        далі
                    </button>
                </div>
            )}

            {currentStep === 2 && (
                <div className={styles.questionInfo}>
                    <label>
                        кількість запитань:
                        <input
                            type="number"
                            name="numQuestions"
                            value={numberQuestions}
                            onChange={handleQuestionInfoChange}
                            required
                            min="1"
                        />
                    </label>
                    <label>
                        кількість відповідей:
                        <input
                            type="number"
                            name="numResults"
                            value={numberResults}
                            onChange={handleQuestionInfoChange}
                            required
                            min="2"
                        />
                    </label>
                    <button type="button" onClick={handleBackStep} className={styles.prevBtn}>
                        назад
                    </button>
                    <button type="button" onClick={handleNextStep} className={styles.nextBtn}>
                        далі
                    </button>
                </div>
            )}

            {currentStep > 2 && currentStep <= 2 + numberQuestions && (
                <div className={styles.questionContainer}>
                    <h4>запитання {currentStep - 2}</h4>
                    <label>
                        <input
                            type="text"
                            placeholder="запитання"
                            onChange={(e) => handleQuestionChange(currentStep - 3, "question", e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="відповідь 1"
                            onChange={(e) => handleQuestionChange(currentStep - 3, "answer1", e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="відповідь 2"
                            onChange={(e) => handleQuestionChange(currentStep - 3, "answer2", e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="відповідь 3"
                            onChange={(e) => handleQuestionChange(currentStep - 3, "answer3", e.target.value)}
                            required
                        />
                    </label>
                    <div className={styles.btnGroup}>
                        <button type="button" onClick={handleBackStep} className={styles.prevBtn}>
                            назад
                        </button>
                        <button type="button" onClick={handleNextStep} className={styles.nextBtn}>
                            далі
                        </button>
                    </div>
                </div>
            )}

            {currentStep === 2 + numberQuestions + 1 && (
                <div className={styles.resultContainer}>
                    <h3>результати</h3>
                    {Array.from({ length: numberResults }, (_, index) => (
                        <label key={index}>
                            <input
                                type="text"
                                value={results[index]}
                                onChange={(e) => handleResultChange(index, e.target.value)}
                                required
                                placeholder="відповідь"
                            />
                        </label>
                    ))}
                    <div className={styles.btnGroup}>
                        <button type="button" onClick={handleBackStep} className={styles.prevResBtn}>
                            назад
                        </button>
                        <button type="submit" className={styles.nextResBtn}>
                            завершити
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}

export default CreateTest;
