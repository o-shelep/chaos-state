import React, { useState } from "react";
import styles from "./CreateTest.module.css";

function CreateTest() {
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);
  const [numResults, setNumResults] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState(Array(numResults).fill(""));

  const handleTestInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "testName") {
      setTestName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleQuestionInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "numQuestions") {
      setNumQuestions(Number(value));
    } else if (name === "numResults") {
      setNumResults(Number(value));
      setResults(Array(Number(value)).fill(""));
    }
  };

  const generateQuestionFields = () => {
    const questionFields = [];
    for (let i = 0; i < numQuestions; i++) {
      questionFields.push(
        <div key={i} className={styles.questionContainer}>
          <h4>запитання {i + 1}</h4>
          <input
            type="text"
            placeholder="запитання"
            onChange={(e) => handleQuestionChange(i, "question", e.target.value)}
          />
          <input
            type="text"
            placeholder="відповідь 1"
            onChange={(e) => handleQuestionChange(i, "answer1", e.target.value)}
          />
          <input
            type="text"
            placeholder="відповідь 2"
            onChange={(e) => handleQuestionChange(i, "answer2", e.target.value)}
          />
          <input
            type="text"
            placeholder="відповідь 3"
            onChange={(e) => handleQuestionChange(i, "answer3", e.target.value)}
          />
        </div>
      );
    }
    return questionFields;
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (!updatedQuestions[index]) {
      updatedQuestions[index] = {};
    }
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleResultChange = (index, value) => {
    const updatedResults = [...results];
    updatedResults[index] = value;
    setResults(updatedResults);
  };

  return (
    <form className={styles.createTestForm}>
      <h2>створити тест</h2>
      <div className={styles.testInfo}>
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
      </div>

      <div className={styles.questionInfo}>
        <label>
          кількість запитань:
          <input
            type="number"
            name="numQuestions"
            value={numQuestions}
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
            value={numResults}
            onChange={handleQuestionInfoChange}
            required
            min="2"
          />
        </label>
      </div>

      {numQuestions > 0 && <div className={styles.questions}>{generateQuestionFields()}</div>}

      {numResults > 0 && (
        <div className={styles.results}>
          {Array.from({ length: numResults }, (_, index) => (
            <div key={index} className={styles.resultContainer}>
              <label>
                відповідь {index + 1}:
                <input
                  type="text"
                  value={results[index]}
                  onChange={(e) => handleResultChange(index, e.target.value)}
                  required
                />
              </label>
            </div>
          ))}
        </div>
      )}

      <button type="submit" className={styles.createTestBtn}>створити</button>
    </form>
  );
}

export default CreateTest;
