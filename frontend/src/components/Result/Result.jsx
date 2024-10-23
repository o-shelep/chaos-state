import React from "react";
import ResultImage from "../../../assets/result.jpg"; // Renamed import to avoid conflict
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
        <a href="/" className={styles.homeLink}>{HOME_LINK_TEXT}</a>
        <span>або</span>
        <a href="/auth/signin" className={styles.signupLink}>
          <span>{SIGNUP_LINK_TEXT}</span> {CONTINUE_TEXT}
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src={ResultImage} alt="Result Illustration" />
      </div>
    </div>
  );
}

export default Result;
