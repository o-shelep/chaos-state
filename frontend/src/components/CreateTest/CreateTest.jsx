import React, { useState } from "react";
import styles from "./CreateTest.module.css";

function CreateTest() {
  const [stage, setStage] = useState(1); 
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);
  const [numResults, setNumResults] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState({}); 

  const handleTestInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "testName") setTestName(value);
    else if (name === "description") setDescription(value);
  };

  const handleQuestionInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "numQuestions") {
      setNumQuestions(Number(value));
      setQuestions(Array(Number(value)).fill({}));
    } else if (name === "numResults") {
      setNumResults(Number(value));
      setResults(Array(Number(value)).fill(""));
    }
  };

const validateFields = () => {
  let newErrors = {};

  if (stage === 1) {
    if (!testName.trim()) newErrors.testName = "назва тесту обов'язкова";
    if (!description.trim()) newErrors.description = "опис тесту обов'язковий";
  } else if (stage === 2) {
    if (numQuestions <= 0) newErrors.numQuestions = "мінімум 1 запитання";
    if (numResults <= 1) newErrors.numResults = "мінімум 2 відповіді";
  } else if (stage >= 3 && stage < 3 + numQuestions) {
    const currentQuestion = questions[stage - 3];
    if (!currentQuestion?.question?.trim()) {
      newErrors[`question${stage - 3}`] = "запитання обов'язкове";
    }
    if (
      !currentQuestion?.answer1?.trim() ||
      !currentQuestion?.answer2?.trim() ||
      !currentQuestion?.answer3?.trim() 
    ) {
      newErrors[`answers${stage - 3}`] = "усі 3 відповіді обов'язкові";
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; 
};


  const handleNext = () => {
    if (validateFields()) setStage(stage + 1); 
  };

  const handleBack = () => setStage(stage - 1);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };

  const renderQuestionForm = (currentQuestionIndex) => (
    <div key={currentQuestionIndex} className={styles.questionContainer}>
      <h4>Запитання {currentQuestionIndex + 1}</h4>
      <input
        type="text"
        placeholder="Запитання"
        onChange={(e) =>
          handleQuestionChange(currentQuestionIndex, "question", e.target.value)
        }
      />
      {errors[`question${currentQuestionIndex}`] && (
        <p className={styles.error}>{errors[`question${currentQuestionIndex}`]}</p>
      )}
      <input
        type="text"
        placeholder="Відповідь 1"
        required
        onChange={(e) =>
          handleQuestionChange(currentQuestionIndex, "answer1", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Відповідь 2"
        required
        onChange={(e) =>
          handleQuestionChange(currentQuestionIndex, "answer2", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Відповідь 3"
        required
        onChange={(e) =>
          handleQuestionChange(currentQuestionIndex, "answer3", e.target.value)
        }
      />
      {errors[`answers${currentQuestionIndex}`] && (
        <p className={styles.error}>{errors[`answers${currentQuestionIndex}`]}</p>
      )}
      <div className={styles.buttonGroup}>
        {stage > 1 && <button type="button" onClick={handleBack} className={styles.prevBtn}>назад</button>}
        <button type="button" onClick={handleNext} className={styles.nextBtn}>далі</button>
      </div>
    </div>
  );

  return (
    <form className={styles.createTestForm}>
      <h2>Створити тест</h2>

      {stage === 1 && (
        <div className={styles.testInfo}>
          <label>
            Назва тесту:
            <input
              type="text"
              name="testName"
              value={testName}
              onChange={handleTestInfoChange}
              required
            />
            {errors.testName && <p className={styles.error}>{errors.testName}</p>}
          </label>
          <label>
            Опис тесту:
            <textarea
              name="description"
              value={description}
              onChange={handleTestInfoChange}
              required
            />
            {errors.description && <p className={styles.error}>{errors.description}</p>}
          </label>
          <div className={styles.buttonGroup}>
            <button type="button" onClick={handleNext}>Далі</button>
          </div>
        </div>
      )}

      {stage === 2 && (
        <div className={styles.questionInfo}>
          <label>
            Кількість запитань:
            <input
              type="number"
              name="numQuestions"
              value={numQuestions}
              onChange={handleQuestionInfoChange}
              required
              min="1"
            />
            {errors.numQuestions && <p className={styles.error}>{errors.numQuestions}</p>}
          </label>
          <label>
            Кількість відповідей:
            <input
              type="number"
              name="numResults"
              value={numResults}
              onChange={handleQuestionInfoChange}
              required
              min="2"
            />
            {errors.numResults && <p className={styles.error}>{errors.numResults}</p>}
          </label>
          <div className={styles.buttonGroup}>
            {stage > 1 && <button type="button" onClick={handleBack} className={styles.prevBtn}>Назад</button>}
            <button type="button" onClick={handleNext}  className={styles.nextBtn}>Далі</button>
          </div>
        </div>
      )}

      {stage >= 3 && stage < 3 + numQuestions && renderQuestionForm(stage - 3)}

      {stage === 3 + numQuestions && (
        <div className={styles.results}>
          {results.map((_, index) => (
            <div key={index} className={styles.resultContainer}>
              <label>
                Відповідь {index + 1}:
                <input
                  type="text"
                  value={results[index]}
                  onChange={(e) => setResults(results.map((res, i) => (i === index ? e.target.value : res)))}
                  required
                />
              </label>
            </div>
          ))}
          <div className={styles.buttonGroup}>
            {stage > 1 && <button type="button" onClick={handleBack} className={styles.prevBtn}>Назад</button>}
            <button type="submit" className={styles.createTestBtn}>
              Створити
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default CreateTest;
