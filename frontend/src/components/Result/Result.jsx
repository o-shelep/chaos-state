import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ResultImage from "../../../assets/result.jpg"; 
import styles from './Result.module.css';

const LOADING_MESSAGE = "Завантаження результатів...";
const RESULTS_TITLE = "Результати";
const HOME_LINK_TEXT = "ви можете повернутись додому";
const SIGNUP_LINK_TEXT = "зареєструватись";
const CONTINUE_TEXT = "і продовжити";

function Result() {
  const { testId } = useParams(); 
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/results/${testId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }
        const { data } = await response.json();
        setResults(data); 
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [testId]);

  const isLoggedIn = !!localStorage.getItem('token'); 

  if (!results) {
    return <div className={styles.loading}>{LOADING_MESSAGE}</div>;
  }

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultsTitle}>{RESULTS_TITLE}</h1>
      <div className={styles.resultsContent}>
        <p className={styles.resultText}>{results}</p>
      </div>
      <div className={styles.actionsContainer}>
        
        {!isLoggedIn && (
          <>
          <Link to="/" className={styles.homeLink}>{HOME_LINK_TEXT}</Link>
            <span>або</span>
            <Link to="/auth/register" className={styles.signupLink}>
              <span>{SIGNUP_LINK_TEXT}</span> {CONTINUE_TEXT}
            </Link>
          </>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img src={ResultImage} alt="Result Illustration" />
      </div>
    </div>
    
  );
}

export default Result;
