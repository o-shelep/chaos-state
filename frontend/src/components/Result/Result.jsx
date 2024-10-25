import React from "react";
import ResultImage from "../../../assets/result.jpg"; 
import styles from './Result.module.css';

const LOADING_MESSAGE = "Завантаження результатів...";
const RESULTS_TITLE = "Результати";
const HOME_LINK_TEXT = "ви можете повернутись додому";
const SIGNUP_LINK_TEXT = "зареєструватись";
const CONTINUE_TEXT = "і продовжити";

function Result() {
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultsTitle}>{RESULTS_TITLE}</h1>
      <div className={styles.resultsContent}>
        <p className={styles.resultText}>{LOADING_MESSAGE}</p>
      </div>
      <div className={styles.actionsContainer}>
        <p className={styles.homeLink}>ви можете повернутись додому або <a href="/auth/signin" className={styles.signupLink}>
          <span>{SIGNUP_LINK_TEXT}</span>
        </a> і продовжити</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={ResultImage} alt="Result Illustration" />
      </div>
    </div>
  );
}

export default Result;
