import React from "react";
import { Link } from "react-router-dom";

import ResultImage from "../../../assets/result.jpg"; 
import useResult from "../../hooks/useResult";
import styles from './Result.module.css';


function Result() {
    const { results, error, isLoggedIn } = useResult();

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    if (!results) {
        return <div className={styles.loading}>завантаження результатів...</div>;
    }

    return (
        <div className={styles.resultsContainer}>
            <h1 className={styles.resultsTitle}>результати</h1>
            <div className={styles.resultsContent}>
                <p className={styles.resultText}>{results}</p>
            </div>
            <div className={styles.actionsContainer}>
                {!isLoggedIn && (
                    <>
                        <Link to="/" className={styles.homeLink}>ви можете повернутись додому</Link>
                        <span>або</span>
                        <Link to="/auth/register" className={styles.signupLink}>
                            <span>зареєструватись</span> і продовжити
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
